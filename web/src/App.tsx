import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import ThemeToggle from './components/ThemeToggle';
import Landing from './pages/Landing';
import ExamList from './pages/ExamList';
import './index.css';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold gradient-bg bg-clip-text text-transparent">
          Exam Prep
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/exams" className="text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark transition">
            Exams
          </Link>
          
          {user ? (
            <>
              <Link to="/dashboard" className="text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark transition">
                Dashboard
              </Link>
              <Link to="/profile" className="text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark transition">
                Profile
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-semibold text-error-light dark:text-error-dark hover:bg-error-light/10 rounded transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="btn-primary px-6 py-2 text-sm">
              Login
            </Link>
          )}
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light dark:border-primary-dark"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/exams" element={<ExamList />} />
        <Route path="/exams/:id" element={<div className="p-8 text-center">Exam Detail - Coming Soon</div>} />
        <Route path="/auth" element={<div className="p-8 text-center">Auth Page - Coming Soon</div>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div className="p-8 text-center">Dashboard - Coming Soon</div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <div className="p-8 text-center">Profile - Coming Soon</div>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
