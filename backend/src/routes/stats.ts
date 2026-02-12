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
import { generalLimiter } from '../middleware/rateLimiter';

const router = Router();

router.get('/today', generalLimiter, authenticateToken, getTodayStats);
router.get('/overall', generalLimiter, authenticateToken, getOverallStats);
router.get('/topics', generalLimiter, authenticateToken, getTopicStats);
router.get('/streak', generalLimiter, authenticateToken, getStreak);
router.get('/weekly', generalLimiter, authenticateToken, getWeeklyStats);
router.post('/goals/set', generalLimiter, authenticateToken, setDailyGoal);
router.get('/goals/progress', generalLimiter, authenticateToken, getGoalProgress);

export default router;
