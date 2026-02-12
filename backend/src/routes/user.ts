import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { getProfile, updateProfile, generatePlan, getStudyPlan } from '../controllers/userController';

const router = Router();

router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateProfile);
router.post('/generate-plan', authenticateToken, generatePlan);
router.get('/study-plan', authenticateToken, getStudyPlan);

export default router;
