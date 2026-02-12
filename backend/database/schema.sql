-- Drop tables if they exist (in reverse order of dependencies)
DROP TABLE IF EXISTS daily_stats CASCADE;
DROP TABLE IF EXISTS user_progress CASCADE;
DROP TABLE IF EXISTS quiz_sessions CASCADE;
DROP TABLE IF EXISTS study_plans CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS pyqs CASCADE;
DROP TABLE IF EXISTS quizzes CASCADE;
DROP TABLE IF EXISTS tips CASCADE;
DROP TABLE IF EXISTS syllabus CASCADE;
DROP TABLE IF EXISTS exams CASCADE;

-- Create exams table
CREATE TABLE exams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  stream VARCHAR(100),
  description TEXT,
  exam_date DATE,
  registration_link TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create syllabus table
CREATE TABLE syllabus (
  id SERIAL PRIMARY KEY,
  exam_id INT REFERENCES exams(id) ON DELETE CASCADE,
  section VARCHAR(255) NOT NULL,
  topic VARCHAR(255) NOT NULL,
  subtopics TEXT,
  weightage VARCHAR(50),
  importance VARCHAR(20)
);

-- Create tips table
CREATE TABLE tips (
  id SERIAL PRIMARY KEY,
  exam_id INT REFERENCES exams(id) ON DELETE CASCADE,
  category VARCHAR(100),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  priority INT DEFAULT 0
);

-- Create quizzes table
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY,
  exam_id INT REFERENCES exams(id) ON DELETE CASCADE,
  topic VARCHAR(255) NOT NULL,
  question TEXT NOT NULL,
  options JSON NOT NULL,
  correct_answer VARCHAR(10) NOT NULL,
  difficulty VARCHAR(20) NOT NULL,
  explanation TEXT,
  marks INT DEFAULT 1,
  is_pyq BOOLEAN DEFAULT FALSE
);

-- Create pyqs (Previous Year Questions) table
CREATE TABLE pyqs (
  id SERIAL PRIMARY KEY,
  exam_id INT REFERENCES exams(id) ON DELETE CASCADE,
  year INT NOT NULL,
  question TEXT NOT NULL,
  options JSON NOT NULL,
  correct_answer VARCHAR(10) NOT NULL,
  explanation TEXT,
  topic VARCHAR(255) NOT NULL,
  difficulty VARCHAR(20) NOT NULL,
  marks INT NOT NULL,
  exam_paper VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  target_exam_id INT REFERENCES exams(id) ON DELETE SET NULL,
  study_hours_per_day INT DEFAULT 4,
  target_exam_date DATE,
  daily_goal INT DEFAULT 50,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create study_plans table
CREATE TABLE study_plans (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  exam_id INT REFERENCES exams(id) ON DELETE CASCADE,
  plan JSON NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create quiz_sessions table
CREATE TABLE quiz_sessions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  exam_id INT REFERENCES exams(id) ON DELETE CASCADE,
  topic VARCHAR(255),
  is_pyq BOOLEAN DEFAULT FALSE,
  pyq_year INT,
  score INT NOT NULL,
  total_questions INT NOT NULL,
  time_taken_seconds INT NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW()
);

-- Create user_progress table
CREATE TABLE user_progress (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  quiz_id INT REFERENCES quizzes(id) ON DELETE CASCADE,
  quiz_session_id INT REFERENCES quiz_sessions(id) ON DELETE CASCADE,
  is_correct BOOLEAN NOT NULL,
  time_taken_seconds INT,
  attempted_at TIMESTAMP DEFAULT NOW()
);

-- Create daily_stats table
CREATE TABLE daily_stats (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  questions_attempted INT DEFAULT 0,
  correct_answers INT DEFAULT 0,
  time_spent_minutes INT DEFAULT 0,
  streak_count INT DEFAULT 0,
  UNIQUE(user_id, date)
);

-- Create indexes for better performance
CREATE INDEX idx_syllabus_exam_id ON syllabus(exam_id);
CREATE INDEX idx_tips_exam_id ON tips(exam_id);
CREATE INDEX idx_quizzes_exam_id ON quizzes(exam_id);
CREATE INDEX idx_quizzes_topic ON quizzes(topic);
CREATE INDEX idx_pyqs_exam_id ON pyqs(exam_id);
CREATE INDEX idx_pyqs_year ON pyqs(year);
CREATE INDEX idx_pyqs_topic ON pyqs(topic);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_quiz_sessions_user_id ON quiz_sessions(user_id);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_daily_stats_user_date ON daily_stats(user_id, date);
