import { Response } from 'express';
import { query } from '../config/database';
import { AuthRequest } from '../middleware/auth';

export const getTodayStats = async (req: AuthRequest, res: Response) => {
  try {
    const today = new Date().toISOString().split('T')[0];

    const result = await query(
      'SELECT * FROM daily_stats WHERE user_id = $1 AND date = $2',
      [req.userId, today]
    );

    if (result.rows.length === 0) {
      return res.json({
        date: today,
        questionsAttempted: 0,
        correctAnswers: 0,
        timeSpentMinutes: 0,
        streakCount: 0,
        accuracy: 0
      });
    }

    const stats = result.rows[0];
    res.json({
      date: stats.date,
      questionsAttempted: stats.questions_attempted,
      correctAnswers: stats.correct_answers,
      timeSpentMinutes: stats.time_spent_minutes,
      streakCount: stats.streak_count,
      accuracy: stats.questions_attempted > 0 
        ? Math.round((stats.correct_answers / stats.questions_attempted) * 100) 
        : 0
    });
  } catch (error) {
    console.error('Get today stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getOverallStats = async (req: AuthRequest, res: Response) => {
  try {
    const result = await query(
      `SELECT 
         COUNT(DISTINCT qs.id) as total_quizzes,
         COALESCE(SUM(ds.questions_attempted), 0) as total_questions,
         COALESCE(SUM(ds.correct_answers), 0) as total_correct,
         COALESCE(SUM(ds.time_spent_minutes), 0) as total_time,
         COALESCE(MAX(ds.streak_count), 0) as best_streak
       FROM users u
       LEFT JOIN daily_stats ds ON u.id = ds.user_id
       LEFT JOIN quiz_sessions qs ON u.id = qs.user_id
       WHERE u.id = $1`,
      [req.userId]
    );

    const stats = result.rows[0];
    const totalQuestions = parseInt(stats.total_questions);
    const totalCorrect = parseInt(stats.total_correct);

    res.json({
      totalQuizzes: parseInt(stats.total_quizzes),
      totalQuestions,
      totalCorrect,
      overallAccuracy: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0,
      totalTimeMinutes: parseInt(stats.total_time),
      bestStreak: parseInt(stats.best_streak)
    });
  } catch (error) {
    console.error('Get overall stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTopicStats = async (req: AuthRequest, res: Response) => {
  try {
    const result = await query(
      `SELECT 
         COALESCE(q.topic, p.topic) as topic,
         COUNT(*) as total_attempted,
         SUM(CASE WHEN up.is_correct THEN 1 ELSE 0 END) as correct_count
       FROM user_progress up
       LEFT JOIN quizzes q ON up.quiz_id = q.id
       LEFT JOIN pyqs p ON up.quiz_id = p.id
       WHERE up.user_id = $1
       GROUP BY COALESCE(q.topic, p.topic)
       ORDER BY total_attempted DESC`,
      [req.userId]
    );

    const topicStats = result.rows.map(row => ({
      topic: row.topic,
      totalAttempted: parseInt(row.total_attempted),
      correctCount: parseInt(row.correct_count),
      accuracy: Math.round((parseInt(row.correct_count) / parseInt(row.total_attempted)) * 100)
    }));

    res.json(topicStats);
  } catch (error) {
    console.error('Get topic stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getStreak = async (req: AuthRequest, res: Response) => {
  try {
    const result = await query(
      `SELECT date, streak_count 
       FROM daily_stats 
       WHERE user_id = $1 
       ORDER BY date DESC 
       LIMIT 30`,
      [req.userId]
    );

    let currentStreak = 0;
    let bestStreak = 0;
    const today = new Date();

    for (let i = 0; i < result.rows.length; i++) {
      const statDate = new Date(result.rows[i].date);
      const diffDays = Math.floor((today.getTime() - statDate.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays === i) {
        currentStreak++;
        bestStreak = Math.max(bestStreak, result.rows[i].streak_count);
      } else {
        break;
      }
    }

    res.json({
      currentStreak,
      bestStreak
    });
  } catch (error) {
    console.error('Get streak error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getWeeklyStats = async (req: AuthRequest, res: Response) => {
  try {
    const result = await query(
      `SELECT date, questions_attempted, correct_answers, time_spent_minutes
       FROM daily_stats
       WHERE user_id = $1 AND date >= CURRENT_DATE - INTERVAL '7 days'
       ORDER BY date`,
      [req.userId]
    );

    const weeklyData = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      const dayStats = result.rows.find(row => row.date.toISOString().split('T')[0] === dateStr);

      weeklyData.push({
        date: dateStr,
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        questionsAttempted: dayStats ? dayStats.questions_attempted : 0,
        correctAnswers: dayStats ? dayStats.correct_answers : 0,
        timeSpentMinutes: dayStats ? dayStats.time_spent_minutes : 0,
        accuracy: dayStats && dayStats.questions_attempted > 0
          ? Math.round((dayStats.correct_answers / dayStats.questions_attempted) * 100)
          : 0
      });
    }

    res.json(weeklyData);
  } catch (error) {
    console.error('Get weekly stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const setDailyGoal = async (req: AuthRequest, res: Response) => {
  try {
    const { dailyGoal } = req.body;

    if (!dailyGoal || dailyGoal < 1) {
      return res.status(400).json({ error: 'Valid daily goal is required' });
    }

    await query(
      'UPDATE users SET daily_goal = $1 WHERE id = $2',
      [dailyGoal, req.userId]
    );

    res.json({ message: 'Daily goal updated successfully', dailyGoal });
  } catch (error) {
    console.error('Set daily goal error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getGoalProgress = async (req: AuthRequest, res: Response) => {
  try {
    const userResult = await query(
      'SELECT daily_goal FROM users WHERE id = $1',
      [req.userId]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const dailyGoal = userResult.rows[0].daily_goal;
    const today = new Date().toISOString().split('T')[0];

    const statsResult = await query(
      'SELECT questions_attempted FROM daily_stats WHERE user_id = $1 AND date = $2',
      [req.userId, today]
    );

    const questionsAttempted = statsResult.rows.length > 0 
      ? statsResult.rows[0].questions_attempted 
      : 0;

    res.json({
      dailyGoal,
      questionsAttempted,
      progress: Math.round((questionsAttempted / dailyGoal) * 100),
      remaining: Math.max(0, dailyGoal - questionsAttempted)
    });
  } catch (error) {
    console.error('Get goal progress error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
