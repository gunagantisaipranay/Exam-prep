import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { getProfile, updateProfile, generatePlan, getStudyPlan } from '../controllers/userController';
import { generalLimiter, aiPlanLimiter } from '../middleware/rateLimiter';

const router = Router();

router.get('/profile', generalLimiter, authenticateToken, getProfile);
router.put('/profile', generalLimiter, authenticateToken, updateProfile);
router.post('/generate-plan', aiPlanLimiter, authenticateToken, generatePlan);
router.get('/study-plan', generalLimiter, authenticateToken, getStudyPlan);

export default router;
