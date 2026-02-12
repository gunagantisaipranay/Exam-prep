import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { examAPI } from '../services/api';
import { motion } from 'framer-motion';

interface Exam {
  id: number;
  name: string;
  category: string;
  stream?: string;
  description: string;
  exam_date: string;
  image_url?: string;
}

const ExamList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  const categories = ['all', 'GATE', 'UPSC', 'JEE', 'Banking'];

  useEffect(() => {
    fetchExams();
  }, [selectedCategory]);

  const fetchExams = async () => {
    try {
      setLoading(true);
      const response = await examAPI.getAll(selectedCategory === 'all' ? undefined : selectedCategory);
      setExams(response.data);
    } catch (error) {
      console.error('Failed to fetch exams', error);
    } finally {
      setLoading(false);
    }
  };

  const getTimeUntilExam = (examDate: string) => {
    const today = new Date();
    const exam = new Date(examDate);
    const diffTime = exam.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Completed';
    if (diffDays === 0) return 'Today!';
    if (diffDays === 1) return 'Tomorrow!';
    return `${diffDays} days left`;
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            All Exams
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Choose an exam to start your preparation journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-primary-light to-secondary-light text-white'
                  : 'bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark border border-border-light dark:border-border-dark'
              }`}
            >
              {cat === 'all' ? 'All Exams' : cat}
            </button>
          ))}
        </div>

        {/* Exam Cards */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light dark:border-primary-dark mx-auto"></div>
            <p className="mt-4 text-text-secondary-light dark:text-text-secondary-dark">Loading exams...</p>
          </div>
        ) : exams.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-secondary-light dark:text-text-secondary-dark">No exams found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={`/exams/${exam.id}`}>
                  <div className="card h-full cursor-pointer group">
                    {exam.image_url && (
                      <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                        <img
                          src={exam.image_url}
                          alt={exam.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition">
                        {exam.name}
                      </h3>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark">
                        {exam.category}
                      </span>
                    </div>
                    {exam.stream && (
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-2">
                        {exam.stream}
                      </p>
                    )}
                    <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 line-clamp-2">
                      {exam.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border-light dark:border-border-dark">
                      <div className="text-sm">
                        <span className="text-text-secondary-light dark:text-text-secondary-dark">Exam Date: </span>
                        <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                          {new Date(exam.exam_date).toLocaleDateString()}
                        </span>
                      </div>
                      <span className={`text-sm font-semibold ${
                        getTimeUntilExam(exam.exam_date).includes('days')
                          ? 'text-warning-light dark:text-warning-dark'
                          : 'text-success-light dark:text-success-dark'
                      }`}>
                        {getTimeUntilExam(exam.exam_date)}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamList;
