import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingBar.scss';

function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date();

      // Start date: November 12, 2025
      const startDate = new Date(2025, 10, 12); // Month is 0-indexed (10 = November)

      // Target date: January 9th, 2026
      const targetDate = new Date(2026, 0, 9); // Month is 0-indexed (0 = January)

      // Calculate total days between start and target
      const totalDays = (targetDate - startDate) / (1000 * 60 * 60 * 24);

      // Calculate days passed from start date
      const daysPassed = (now - startDate) / (1000 * 60 * 60 * 24);

      // Calculate progress percentage
      const calculatedProgress = Math.min(
        100,
        Math.max(0, (daysPassed / totalDays) * 100)
      );
      setProgress(calculatedProgress);

      // Calculate days remaining
      const remaining = (targetDate - now) / (1000 * 60 * 60 * 24);
      setDaysRemaining(Math.max(0, Math.ceil(remaining)));
    };

    calculateProgress();
    // Update every hour
    const interval = setInterval(calculateProgress, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='loading-bar-container'>
      <div className='loading-bar-header'>
        <h1>Countdown to seeing my baby</h1>
        <p className='subtitle'>Progress towards the target date</p>
      </div>

      <div className='progress-card'>
        <div className='progress-info'>
          <div className='progress-label'>
            <span>Progress</span>
            <span className='progress-percentage'>{progress.toFixed(2)}%</span>
          </div>
          {daysRemaining > 0 && (
            <p className='days-remaining'>
              {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining
            </p>
          )}
          {daysRemaining === 0 && progress >= 100 && (
            <p className='days-remaining completed'>Target reached! 🎉</p>
          )}
        </div>

        <div className='progress-bar-wrapper'>
          <div className='progress-bar-background'>
            <motion.div
              className='progress-bar-fill'
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>

        <div className='progress-details'>
          <div className='detail-item'>
            <span className='detail-label'>Start Date</span>
            <span className='detail-value'>November 12, 2025</span>
          </div>
          <div className='detail-item'>
            <span className='detail-label'>Target Date</span>
            <span className='detail-value'>January 9, 2026</span>
          </div>
          <div className='detail-item'>
            <span className='detail-label'>Current Progress</span>
            <span className='detail-value'>{progress.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingBar;
