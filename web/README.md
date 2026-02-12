# Exam Prep Web Frontend

Modern web application for exam preparation built with React 18, TypeScript, Tailwind CSS, and Vite.

## Features

- 🎨 **Modern UI** with dark/light theme support
- 📊 **Advanced Analytics** with animated charts (Recharts)
- ⭕ **Circular Progress** indicators for visual appeal
- 🎯 **Exam Coverage** - GATE, UPSC, JEE, Banking exams
- 📝 **2,650+ PYQs** from 2020-2025
- 🤖 **AI Study Planner** powered by OpenAI
- 📈 **Performance Tracking** with detailed statistics
- 🔐 **Secure Authentication** with JWT
- 📱 **Responsive Design** works on all devices

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Recharts** - Animated graphs
- **react-circular-progressbar** - Progress indicators
- **Framer Motion** - Animations
- **Zustand** - State management
- **Axios** - API calls
- **React Router** - Navigation

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
cd web
npm install
```

### 2. Configure Environment

Create a `.env` file by copying `.env.example`:

```bash
cp .env.example .env
```

Edit `.env` with your backend API URL:

```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Start Development Server

```bash
npm run dev
```

The app will start on `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
web/
├── src/
│   ├── components/
│   │   ├── CircularStat.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Landing.tsx
│   │   ├── ExamList.tsx
│   │   ├── ExamDetail.tsx
│   │   ├── Dashboard.tsx
│   │   └── ...
│   ├── services/
│   │   └── api.ts
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Available Routes

### Public Routes
- `/` - Landing page
- `/exams` - Exam list with filters
- `/exams/:id` - Exam details
- `/auth` - Login/Register

### Protected Routes (Requires Authentication)
- `/dashboard` - Analytics dashboard with stats
- `/exams/:id/syllabus` - Exam syllabus
- `/exams/:id/tips` - Preparation tips
- `/exams/:id/pyqs` - Previous year questions browser
- `/quiz/:sessionId` - Quiz interface
- `/quiz/results/:sessionId` - Quiz results
- `/study-planner` - AI study planner
- `/profile` - User profile

## Theme System

The app supports dynamic light/dark themes with smooth transitions.

### Light Mode Colors
- Primary: #4F46E5 (Indigo)
- Secondary: #7C3AED (Purple)
- Background: #FFFFFF
- Surface: #F9FAFB

### Dark Mode Colors
- Primary: #8B5CF6 (Violet)
- Secondary: #EC4899 (Pink)
- Background: #0F172A
- Surface: #1E293B

Toggle theme using the button in the navbar.

## Key Components

### CircularStat
Displays statistics with animated circular progress bars.
```tsx
<CircularStat 
  value={32} 
  maxValue={50} 
  label="Daily Goal" 
  subLabel="Questions completed today"
/>
```

### PerformanceChart
Line chart for weekly activity visualization.

### ExamCard
Card component displaying exam information.

## API Integration

The app uses Axios for API calls with automatic token management.

### Authentication
```typescript
import { authAPI } from './services/api';

// Login
await authAPI.login({ email, password });

// Register
await authAPI.register({ name, email, password });
```

### Exams
```typescript
import { examAPI } from './services/api';

// Get all exams
const exams = await examAPI.getAll();

// Get exam by ID
const exam = await examAPI.getById(id);

// Get PYQs
const pyqs = await examAPI.getPYQs(examId, { year: 2024 });
```

## State Management

Uses React Context API for global state:
- **AuthContext** - User authentication state
- **ThemeContext** - Theme (light/dark) state

## Styling

- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** for theming
- **Framer Motion** for smooth animations
- **Responsive design** with mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Tips

### Hot Module Replacement
Vite provides instant HMR for fast development.

### TypeScript
All components are typed for better DX and fewer runtime errors.

### Code Organization
- Keep components small and focused
- Use custom hooks for reusable logic
- Separate business logic from UI

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Netlify
```bash
netlify deploy --prod
```

### Manual Deployment
1. Build: `npm run build`
2. Upload `dist/` folder to your hosting service
3. Configure redirects for SPA routing

## Environment Variables

- `VITE_API_URL` - Backend API base URL

## License

MIT
