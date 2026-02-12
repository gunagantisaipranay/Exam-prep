import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import examRoutes from './routes/exams';
import quizRoutes from './routes/quiz';
import statsRoutes from './routes/stats';
import userRoutes from './routes/user';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Exam Prep API Server',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      exams: '/api/exams',
      quiz: '/api/quiz',
      stats: '/api/stats',
      user: '/api/user'
    }
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/user', userRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 Exam Prep API ready`);
});

export default app;
