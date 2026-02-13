import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { startQuiz, submitQuiz, getQuizResults } from '../controllers/quizController';
import { quizLimiter, generalLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post('/start', generalLimiter, authenticateToken, startQuiz);
router.post('/submit', quizLimiter, authenticateToken, submitQuiz);
router.get('/results/:sessionId', generalLimiter, authenticateToken, getQuizResults);

export default router;
