import { Router } from 'express';
import {
  getAllExams,
  getExamById,
  getExamSyllabus,
  getExamTips,
  getExamQuizzes,
  getExamPYQs,
  getPYQYears
} from '../controllers/examController';

const router = Router();

router.get('/', getAllExams);
router.get('/:id', getExamById);
router.get('/:id/syllabus', getExamSyllabus);
router.get('/:id/tips', getExamTips);
router.get('/:id/quizzes', getExamQuizzes);
router.get('/:id/pyqs', getExamPYQs);
router.get('/pyqs/years/:examId', getPYQYears);

export default router;
