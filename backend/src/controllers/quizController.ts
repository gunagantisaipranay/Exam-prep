import { Response } from 'express';
import { query } from '../config/database';
import { AuthRequest } from '../middleware/auth';

export const startQuiz = async (req: AuthRequest, res: Response) => {
  try {
    const { examId, topic, isPyq, pyqYear, questionIds } = req.body;

    if (!examId || !questionIds || questionIds.length === 0) {
      return res.status(400).json({ error: 'Exam ID and question IDs are required' });
    }

    const sessionResult = await query(
      `INSERT INTO quiz_sessions (user_id, exam_id, topic, is_pyq, pyq_year, score, total_questions, time_taken_seconds)
       VALUES ($1, $2, $3, $4, $5, 0, $6, 0) RETURNING id`,
      [req.userId, examId, topic || null, isPyq || false, pyqYear || null, questionIds.length]
    );

    const sessionId = sessionResult.rows[0].id;

    res.json({
      sessionId,
      message: 'Quiz session started',
      totalQuestions: questionIds.length
    });
  } catch (error) {
    console.error('Start quiz error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const submitQuiz = async (req: AuthRequest, res: Response) => {
  try {
    const { sessionId, answers, timeTakenSeconds } = req.body;

    if (!sessionId || !answers) {
      return res.status(400).json({ error: 'Session ID and answers are required' });
    }

    const sessionResult = await query(
      'SELECT * FROM quiz_sessions WHERE id = $1 AND user_id = $2',
      [sessionId, req.userId]
    );

    if (sessionResult.rows.length === 0) {
      return res.status(404).json({ error: 'Quiz session not found' });
    }

    const session = sessionResult.rows[0];
    let correctCount = 0;

    for (const answer of answers) {
      const { questionId, userAnswer, timeTaken, isPyq } = answer;

      let questionResult;
      if (isPyq || session.is_pyq) {
        questionResult = await query(
          'SELECT correct_answer FROM pyqs WHERE id = $1',
          [questionId]
        );
      } else {
        questionResult = await query(
          'SELECT correct_answer FROM quizzes WHERE id = $1',
          [questionId]
        );
      }

      if (questionResult.rows.length === 0) continue;

      const correctAnswer = questionResult.rows[0].correct_answer;
      const isCorrect = userAnswer === correctAnswer;

      if (isCorrect) correctCount++;

      await query(
        `INSERT INTO user_progress (user_id, quiz_id, quiz_session_id, is_correct, time_taken_seconds)
         VALUES ($1, $2, $3, $4, $5)`,
        [req.userId, questionId, sessionId, isCorrect, timeTaken || 0]
      );
    }

    await query(
      'UPDATE quiz_sessions SET score = $1, time_taken_seconds = $2, completed_at = NOW() WHERE id = $3',
      [correctCount, timeTakenSeconds, sessionId]
    );

    const today = new Date().toISOString().split('T')[0];
    await query(
      `INSERT INTO daily_stats (user_id, date, questions_attempted, correct_answers, time_spent_minutes)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (user_id, date)
       DO UPDATE SET 
         questions_attempted = daily_stats.questions_attempted + $3,
         correct_answers = daily_stats.correct_answers + $4,
         time_spent_minutes = daily_stats.time_spent_minutes + $5`,
      [req.userId, today, answers.length, correctCount, Math.round(timeTakenSeconds / 60)]
    );

    res.json({
      message: 'Quiz submitted successfully',
      score: correctCount,
      totalQuestions: answers.length,
      accuracy: Math.round((correctCount / answers.length) * 100)
    });
  } catch (error) {
    console.error('Submit quiz error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getQuizResults = async (req: AuthRequest, res: Response) => {
  try {
    const { sessionId } = req.params;

    const sessionResult = await query(
      `SELECT qs.*, e.name as exam_name 
       FROM quiz_sessions qs
       JOIN exams e ON qs.exam_id = e.id
       WHERE qs.id = $1 AND qs.user_id = $2`,
      [sessionId, req.userId]
    );

    if (sessionResult.rows.length === 0) {
      return res.status(404).json({ error: 'Quiz session not found' });
    }

    const session = sessionResult.rows[0];

    const progressResult = await query(
      `SELECT up.*, 
              COALESCE(q.question, p.question) as question,
              COALESCE(q.options, p.options) as options,
              COALESCE(q.correct_answer, p.correct_answer) as correct_answer,
              COALESCE(q.explanation, p.explanation) as explanation,
              COALESCE(q.topic, p.topic) as topic
       FROM user_progress up
       LEFT JOIN quizzes q ON up.quiz_id = q.id AND NOT $1
       LEFT JOIN pyqs p ON up.quiz_id = p.id AND $1
       WHERE up.quiz_session_id = $2
       ORDER BY up.id`,
      [session.is_pyq, sessionId]
    );

    res.json({
      session: {
        id: session.id,
        examName: session.exam_name,
        topic: session.topic,
        isPyq: session.is_pyq,
        pyqYear: session.pyq_year,
        score: session.score,
        totalQuestions: session.total_questions,
        timeTakenSeconds: session.time_taken_seconds,
        accuracy: Math.round((session.score / session.total_questions) * 100),
        completedAt: session.completed_at
      },
      questions: progressResult.rows
    });
  } catch (error) {
    console.error('Get quiz results error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
