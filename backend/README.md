# Exam Prep Backend API

Backend server for the Exam Preparation application built with Node.js, Express, TypeScript, and PostgreSQL.

## Features

- **RESTful API** for exam preparation platform
- **JWT Authentication** for secure user management
- **PostgreSQL Database** with comprehensive schema
- **AI Study Planner** integration with OpenAI
- **PYQ Database** with 2,650+ previous year questions
- **Statistics Tracking** for user performance analytics

## Tech Stack

- Node.js & Express
- TypeScript
- PostgreSQL
- JWT for authentication
- OpenAI API for study planning
- bcryptjs for password hashing

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Create a `.env` file by copying `.env.example`:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/exam_prep
JWT_SECRET=your_secure_jwt_secret_here
OPENAI_API_KEY=sk-your-openai-api-key
PORT=5000
NODE_ENV=development
```

### 3. Setup Database

Create the database:

```bash
createdb exam_prep
```

Or using psql:

```sql
CREATE DATABASE exam_prep;
```

Run the schema:

```bash
psql -d exam_prep -f database/schema.sql
```

### 4. Seed Sample Data

```bash
psql -d exam_prep -f database/seeds/exams.sql
psql -d exam_prep -f database/seeds/syllabus.sql
psql -d exam_prep -f database/seeds/tips.sql
psql -d exam_prep -f database/seeds/pyqs.sql
```

### 5. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

### 6. Build for Production

```bash
npm run build
npm start
```

## API Endpoints

### Public Endpoints (No Authentication Required)

#### Exams
- `GET /api/exams` - List all exams
- `GET /api/exams/:id` - Get exam details
- `GET /api/exams/:id/syllabus` - Get exam syllabus
- `GET /api/exams/:id/tips` - Get preparation tips
- `GET /api/exams/:id/quizzes` - Get quiz questions
- `GET /api/exams/:id/pyqs` - Get previous year questions
- `GET /api/exams/pyqs/years/:examId` - Get available PYQ years

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Protected Endpoints (Authentication Required)

#### User Profile
- `GET /api/auth/me` - Get current user info
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update profile

#### Study Planning
- `POST /api/user/generate-plan` - Generate AI study plan
- `GET /api/user/study-plan` - Get saved study plan

#### Quiz
- `POST /api/quiz/start` - Start a quiz session
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /api/quiz/results/:sessionId` - Get quiz results

#### Statistics
- `GET /api/stats/today` - Today's performance
- `GET /api/stats/overall` - Overall statistics
- `GET /api/stats/topics` - Topic-wise performance
- `GET /api/stats/streak` - Current and best streak
- `GET /api/stats/weekly` - Last 7 days activity

#### Goals
- `POST /api/stats/goals/set` - Set daily goal
- `GET /api/stats/goals/progress` - Check goal progress

## Database Schema

### Tables

- **exams** - Exam information (GATE, UPSC, JEE, Banking)
- **syllabus** - Detailed syllabus for each exam
- **tips** - Preparation tips and strategies
- **quizzes** - Practice questions
- **pyqs** - Previous Year Questions (2020-2025)
- **users** - User accounts
- **study_plans** - AI-generated study plans
- **quiz_sessions** - Quiz attempt history
- **user_progress** - Question-level progress tracking
- **daily_stats** - Daily performance statistics

## Sample Data

The database includes:
- 9 exams across 4 categories (GATE, UPSC, JEE, Banking)
- 100+ syllabus topics
- 70+ preparation tips
- 2,650+ PYQ questions from 2020-2025
- Coverage for:
  - GATE (CS, ME, EE, CE) - 1,300 questions
  - UPSC Prelims - 500 questions
  - JEE (Mains, Advanced) - 450 questions
  - Banking (IBPS, SBI) - 400 questions

## API Response Format

### Success Response
```json
{
  "message": "Success message",
  "data": { ... }
}
```

### Error Response
```json
{
  "error": "Error message"
}
```

## Authentication

Protected endpoints require JWT token in Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

Tokens are valid for 7 days after login/registration.

## Development

### Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── examController.ts
│   │   ├── quizController.ts
│   │   ├── statsController.ts
│   │   └── userController.ts
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── exams.ts
│   │   ├── quiz.ts
│   │   ├── stats.ts
│   │   └── user.ts
│   ├── services/
│   │   └── aiService.ts
│   ├── middleware/
│   │   └── auth.ts
│   └── server.ts
├── database/
│   ├── schema.sql
│   └── seeds/
│       ├── exams.sql
│       ├── syllabus.sql
│       ├── tips.sql
│       └── pyqs.sql
├── package.json
├── tsconfig.json
└── .env.example
```

## Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## License

MIT
