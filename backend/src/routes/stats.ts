import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import {
  getTodayStats,
  getOverallStats,
  getTopicStats,
  getStreak,
  getWeeklyStats,
  setDailyGoal,
  getGoalProgress
} from '../controllers/statsController';

const router = Router();

router.get('/today', authenticateToken, getTodayStats);
router.get('/overall', authenticateToken, getOverallStats);
router.get('/topics', authenticateToken, getTopicStats);
router.get('/streak', authenticateToken, getStreak);
router.get('/weekly', authenticateToken, getWeeklyStats);
router.post('/goals/set', authenticateToken, setDailyGoal);
router.get('/goals/progress', authenticateToken, getGoalProgress);

export default router;
