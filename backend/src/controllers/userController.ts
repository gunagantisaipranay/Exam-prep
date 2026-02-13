import { Response } from 'express';
import { query } from '../config/database';
import { AuthRequest } from '../middleware/auth';
import { generateStudyPlan } from '../services/aiService';

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const result = await query(
      `SELECT u.id, u.email, u.name, u.target_exam_id, u.study_hours_per_day, 
              u.target_exam_date, u.daily_goal, e.name as target_exam_name,
              e.category as target_exam_category
       FROM users u
       LEFT JOIN exams e ON u.target_exam_id = e.id
       WHERE u.id = $1`,
      [req.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = result.rows[0];
    res.json({
      id: user.id,
      email: user.email,
      name: user.name,
      targetExamId: user.target_exam_id,
      targetExamName: user.target_exam_name,
      targetExamCategory: user.target_exam_category,
      studyHoursPerDay: user.study_hours_per_day,
      targetExamDate: user.target_exam_date,
      dailyGoal: user.daily_goal
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const { name, targetExamId, studyHoursPerDay, targetExamDate, dailyGoal } = req.body;

    const updates: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    if (name) {
      updates.push(`name = $${paramCount++}`);
      values.push(name);
    }

    if (targetExamId !== undefined) {
      updates.push(`target_exam_id = $${paramCount++}`);
      values.push(targetExamId);
    }

    if (studyHoursPerDay !== undefined) {
      updates.push(`study_hours_per_day = $${paramCount++}`);
      values.push(studyHoursPerDay);
    }

    if (targetExamDate !== undefined) {
      updates.push(`target_exam_date = $${paramCount++}`);
      values.push(targetExamDate);
    }

    if (dailyGoal !== undefined) {
      updates.push(`daily_goal = $${paramCount++}`);
      values.push(dailyGoal);
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'No fields to update' });
    }

    values.push(req.userId);
    const queryText = `UPDATE users SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;

    const result = await query(queryText, values);
    res.json({ message: 'Profile updated successfully', user: result.rows[0] });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const generatePlan = async (req: AuthRequest, res: Response) => {
  try {
    const { examId, targetDate, studyHours, currentLevel } = req.body;

    if (!examId || !targetDate || !studyHours) {
      return res.status(400).json({ 
        error: 'Exam ID, target date, and study hours are required' 
      });
    }

    const examResult = await query('SELECT * FROM exams WHERE id = $1', [examId]);
    if (examResult.rows.length === 0) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    const exam = examResult.rows[0];
    const target = new Date(targetDate);
    const today = new Date();
    const daysRemaining = Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (daysRemaining < 1) {
      return res.status(400).json({ error: 'Target date must be in the future' });
    }

    const syllabusResult = await query(
      'SELECT DISTINCT topic FROM syllabus WHERE exam_id = $1',
      [examId]
    );
    const topics = syllabusResult.rows.map(row => row.topic);

    const plan = await generateStudyPlan({
      examName: exam.name,
      daysRemaining,
      studyHoursPerDay: studyHours,
      currentLevel: currentLevel || 'Intermediate',
      topics
    });

    await query(
      `INSERT INTO study_plans (user_id, exam_id, plan)
       VALUES ($1, $2, $3)
       ON CONFLICT DO NOTHING`,
      [req.userId, examId, JSON.stringify(plan)]
    );

    await query(
      'UPDATE users SET target_exam_id = $1, target_exam_date = $2, study_hours_per_day = $3 WHERE id = $4',
      [examId, targetDate, studyHours, req.userId]
    );

    res.json({
      message: 'Study plan generated successfully',
      plan
    });
  } catch (error) {
    console.error('Generate plan error:', error);
    res.status(500).json({ error: 'Failed to generate study plan' });
  }
};

export const getStudyPlan = async (req: AuthRequest, res: Response) => {
  try {
    const result = await query(
      `SELECT sp.*, e.name as exam_name
       FROM study_plans sp
       JOIN exams e ON sp.exam_id = e.id
       WHERE sp.user_id = $1
       ORDER BY sp.created_at DESC
       LIMIT 1`,
      [req.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'No study plan found' });
    }

    const studyPlan = result.rows[0];
    res.json({
      id: studyPlan.id,
      examName: studyPlan.exam_name,
      plan: studyPlan.plan,
      createdAt: studyPlan.created_at
    });
  } catch (error) {
    console.error('Get study plan error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
