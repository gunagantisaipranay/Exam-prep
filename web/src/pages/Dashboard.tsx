import React, { useEffect, useState } from 'react';
import { statsAPI } from '../services/api';
import CircularStat from '../components/CircularStat';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

interface TodayStats {
  questionsAttempted: number;
  correctAnswers: number;
  accuracy: number;
  streakCount: number;
}

interface GoalProgress {
  dailyGoal: number;
  questionsAttempted: number;
  progress: number;
  remaining: number;
}

interface WeeklyData {
  day: string;
  questionsAttempted: number;
  accuracy: number;
}

const Dashboard: React.FC = () => {
  const [todayStats, setTodayStats] = useState<TodayStats | null>(null);
  const [goalProgress, setGoalProgress] = useState<GoalProgress | null>(null);
  const [weeklyData, setWeeklyData] = useState<WeeklyData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [todayRes, goalRes, weeklyRes] = await Promise.all([
        statsAPI.getToday(),
        statsAPI.getGoalProgress(),
        statsAPI.getWeekly(),
      ]);

      setTodayStats(todayRes.data);
      setGoalProgress(goalRes.data);
      setWeeklyData(weeklyRes.data);
    } catch (error) {
      console.error('Failed to fetch dashboard data', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light dark:border-primary-dark"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Track your progress and performance
          </p>
        </motion.div>

        {/* Today's Stats - Circular Progress Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <CircularStat
              value={goalProgress?.questionsAttempted || 0}
              maxValue={goalProgress?.dailyGoal || 50}
              label="Daily Goal Progress"
              subLabel={`${goalProgress?.remaining || 0} questions remaining`}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CircularStat
              value={todayStats?.accuracy || 0}
              maxValue={100}
              label="Today's Accuracy"
              subLabel={`${todayStats?.correctAnswers || 0}/${todayStats?.questionsAttempted || 0} correct`}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col items-center p-6 card">
              <div className="text-6xl mb-4">🔥</div>
              <p className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
                Current Streak
              </p>
              <p className="text-4xl font-bold text-warning-light dark:text-warning-dark mt-2">
                {todayStats?.streakCount || 0}
              </p>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                days in a row
              </p>
            </div>
          </motion.div>
        </div>

        {/* Weekly Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card mb-8"
        >
          <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
            Weekly Activity
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis
                dataKey="day"
                stroke="var(--text-secondary)"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="var(--text-secondary)"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: 'var(--text-primary)' }}
              />
              <Line
                type="monotone"
                dataKey="questionsAttempted"
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={{ fill: 'var(--primary)', r: 5 }}
                animationDuration={1500}
                animationEasing="ease-in-out"
                name="Questions"
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <button className="card text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="text-4xl mb-2">📝</div>
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
              Take Quiz
            </h3>
          </button>

          <button className="card text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="text-4xl mb-2">📚</div>
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
              Practice PYQs
            </h3>
          </button>

          <button className="card text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="text-4xl mb-2">🤖</div>
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
              Study Planner
            </h3>
          </button>

          <button className="card text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
              View Stats
            </h3>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
