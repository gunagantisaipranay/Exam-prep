# 🎯 Exam Prep - Complete Exam Preparation Platform

An AI-powered full-stack exam preparation application with web and mobile support, featuring 2,650+ Previous Year Questions (PYQs), advanced statistics dashboard with animated graphs, and dynamic theming.

## 📋 Quick Links

- [Backend Documentation](./backend/README.md)
- [Web Frontend Documentation](./web/README.md)
- [Mobile App Documentation](./mobile/README.md) (Coming Soon)

## ✨ Key Features

- ✅ **2,650+ PYQ Questions** from 2020-2025
- ✅ **AI-Powered Study Planner** using OpenAI
- ✅ **Advanced Analytics Dashboard** with animated graphs
- ✅ **Dynamic Dark/Light Themes** with smooth transitions
- ✅ **Cross-Platform** - Web + Mobile apps
- ✅ **Comprehensive Coverage** - GATE, UPSC, JEE, Banking exams

## 🛠️ Tech Stack

### Backend
- Node.js + Express + TypeScript
- PostgreSQL database
- JWT authentication
- OpenAI API integration

### Web Frontend
- React 18 + TypeScript
- Vite + Tailwind CSS
- Recharts + Framer Motion
- React Context API

### Mobile Frontend (Coming Soon)
- React Native + Expo
- NativeWind styling
- React Navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- PostgreSQL (v12+)
- npm or yarn

### Quick Setup

1. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
createdb exam_prep
psql -d exam_prep -f database/schema.sql
psql -d exam_prep -f database/seeds/exams.sql
npm run dev
```

2. **Web Frontend Setup**
```bash
cd web
npm install
cp .env.example .env
npm run dev
```

3. **Access the application**
- Backend API: http://localhost:5000
- Web App: http://localhost:3000

## 📚 Exam Coverage

- **GATE**: CS, ME, EE, CE (1,300+ questions)
- **UPSC**: Prelims (500+ questions)
- **JEE**: Mains + Advanced (450+ questions)
- **Banking**: IBPS, SBI PO (400+ questions)

## 🎨 Screenshots

*Coming soon*

## 📖 Documentation

For detailed documentation, please refer to:
- [Backend API Documentation](./backend/README.md)
- [Web App Documentation](./web/README.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License

---

**Built with ❤️ for students preparing for competitive exams**
