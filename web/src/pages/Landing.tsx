import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing: React.FC = () => {
  const examCategories = [
    { name: 'GATE', icon: '🎓', color: 'from-blue-500 to-blue-700' },
    { name: 'UPSC', icon: '🏛️', color: 'from-purple-500 to-purple-700' },
    { name: 'JEE', icon: '📐', color: 'from-green-500 to-green-700' },
    { name: 'Banking', icon: '🏦', color: 'from-orange-500 to-orange-700' },
  ];

  const features = [
    { title: '2,650+ PYQ Questions', icon: '📝', description: 'Practice with real previous year questions from 2020-2025' },
    { title: 'AI Study Planner', icon: '🤖', description: 'Get personalized study plans powered by AI' },
    { title: 'Advanced Analytics', icon: '📊', description: 'Track your performance with detailed statistics and graphs' },
    { title: 'Topic-wise Practice', icon: '📚', description: 'Master each topic with targeted practice sessions' },
    { title: 'Daily Goals & Streaks', icon: '🔥', description: 'Stay motivated with daily goals and streak tracking' },
    { title: 'Detailed Explanations', icon: '💡', description: 'Learn from comprehensive explanations for each question' },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Your Path to Exam Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            Ace GATE, UPSC, JEE, and Banking exams with AI-powered preparation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link to="/exams" className="btn-primary text-lg px-8 py-3">
              Browse Exams
            </Link>
            <Link to="/auth" className="bg-white text-primary-light px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started Free
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="py-16 px-4 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary-light dark:text-text-primary-dark">
            Choose Your Exam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/exams?category=${category.name}`}>
                  <div className="card text-center cursor-pointer group">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary-light dark:text-text-primary-dark">
            Why Choose Exam Prep?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-text-primary-light dark:text-text-primary-dark">
                  {feature.title}
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Preparation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students achieving their dream scores
          </p>
          <Link to="/auth" className="bg-white text-primary-light px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-light dark:bg-surface-dark py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            © 2026 Exam Prep. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
