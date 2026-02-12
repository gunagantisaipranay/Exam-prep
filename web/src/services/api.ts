import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (data: { email: string; password: string; name: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
};

export const examAPI = {
  getAll: (category?: string) =>
    api.get('/exams', { params: { category } }),
  getById: (id: number) => api.get(`/exams/${id}`),
  getSyllabus: (id: number) => api.get(`/exams/${id}/syllabus`),
  getTips: (id: number) => api.get(`/exams/${id}/tips`),
  getQuizzes: (id: number, params?: any) =>
    api.get(`/exams/${id}/quizzes`, { params }),
  getPYQs: (id: number, params?: any) =>
    api.get(`/exams/${id}/pyqs`, { params }),
  getPYQYears: (examId: number) =>
    api.get(`/exams/pyqs/years/${examId}`),
};

export const quizAPI = {
  start: (data: any) => api.post('/quiz/start', data),
  submit: (data: any) => api.post('/quiz/submit', data),
  getResults: (sessionId: number) => api.get(`/quiz/results/${sessionId}`),
};

export const statsAPI = {
  getToday: () => api.get('/stats/today'),
  getOverall: () => api.get('/stats/overall'),
  getTopics: () => api.get('/stats/topics'),
  getStreak: () => api.get('/stats/streak'),
  getWeekly: () => api.get('/stats/weekly'),
  setGoal: (dailyGoal: number) => api.post('/stats/goals/set', { dailyGoal }),
  getGoalProgress: () => api.get('/stats/goals/progress'),
};

export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data: any) => api.put('/user/profile', data),
  generatePlan: (data: any) => api.post('/user/generate-plan', data),
  getStudyPlan: () => api.get('/user/study-plan'),
};

export default api;
