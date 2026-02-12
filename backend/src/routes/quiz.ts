import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { startQuiz, submitQuiz, getQuizResults } from '../controllers/quizController';

const router = Router();

router.post('/start', authenticateToken, startQuiz);
router.post('/submit', authenticateToken, submitQuiz);
router.get('/results/:sessionId', authenticateToken, getQuizResults);

export default router;
