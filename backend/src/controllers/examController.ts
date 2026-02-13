import { Request, Response } from 'express';
import { query } from '../config/database';

export const getAllExams = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    let queryText = 'SELECT * FROM exams';
    const params: any[] = [];

    if (category) {
      queryText += ' WHERE category = $1';
      params.push(category);
    }

    queryText += ' ORDER BY exam_date DESC';

    const result = await query(queryText, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Get exams error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getExamById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await query('SELECT * FROM exams WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get exam error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getExamSyllabus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await query(
      'SELECT * FROM syllabus WHERE exam_id = $1 ORDER BY section, topic',
      [id]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Get syllabus error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getExamTips = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await query(
      'SELECT * FROM tips WHERE exam_id = $1 ORDER BY priority DESC, category',
      [id]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Get tips error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getExamQuizzes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { topic, difficulty, limit = '20' } = req.query;

    let queryText = 'SELECT * FROM quizzes WHERE exam_id = $1';
    const params: any[] = [id];
    let paramCount = 1;

    if (topic) {
      paramCount++;
      queryText += ` AND topic = $${paramCount}`;
      params.push(topic);
    }

    if (difficulty) {
      paramCount++;
      queryText += ` AND difficulty = $${paramCount}`;
      params.push(difficulty);
    }

    queryText += ' ORDER BY RANDOM()';
    paramCount++;
    queryText += ` LIMIT $${paramCount}`;
    params.push(parseInt(limit as string));

    const result = await query(queryText, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Get quizzes error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getExamPYQs = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { year, topic, difficulty, limit = '50' } = req.query;

    let queryText = 'SELECT * FROM pyqs WHERE exam_id = $1';
    const params: any[] = [id];
    let paramCount = 1;

    if (year) {
      paramCount++;
      queryText += ` AND year = $${paramCount}`;
      params.push(year);
    }

    if (topic) {
      paramCount++;
      queryText += ` AND topic = $${paramCount}`;
      params.push(topic);
    }

    if (difficulty) {
      paramCount++;
      queryText += ` AND difficulty = $${paramCount}`;
      params.push(difficulty);
    }

    queryText += ' ORDER BY year DESC, id';
    paramCount++;
    queryText += ` LIMIT $${paramCount}`;
    params.push(parseInt(limit as string));

    const result = await query(queryText, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Get PYQs error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getPYQYears = async (req: Request, res: Response) => {
  try {
    const { examId } = req.params;
    const result = await query(
      'SELECT DISTINCT year FROM pyqs WHERE exam_id = $1 ORDER BY year DESC',
      [examId]
    );

    res.json(result.rows.map(row => row.year));
  } catch (error) {
    console.error('Get PYQ years error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
