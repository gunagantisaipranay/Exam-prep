import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularStatProps {
  value: number;
  maxValue: number;
  label: string;
  subLabel?: string;
  size?: number;
}

const CircularStat: React.FC<CircularStatProps> = ({
  value,
  maxValue,
  label,
  subLabel,
  size = 150
}) => {
  const percentage = Math.round((value / maxValue) * 100);
  
  const getColor = () => {
    if (percentage >= 80) return '#10B981';
    if (percentage >= 50) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <div className="flex flex-col items-center p-6 card">
      <div style={{ width: size, height: size }}>
        <CircularProgressbar
          value={percentage}
          text={`${value}/${maxValue}`}
          styles={buildStyles({
            textSize: '16px',
            pathColor: getColor(),
            textColor: 'var(--text-primary)',
            trailColor: 'var(--border)',
            pathTransitionDuration: 1.5,
          })}
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
          {label}
        </p>
        {subLabel && (
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
            {subLabel}
          </p>
        )}
        <p className="text-2xl font-bold mt-2" style={{ color: getColor() }}>
          {percentage}%
        </p>
      </div>
    </div>
  );
};

export default CircularStat;
