import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingBar.scss';

function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateProgress = () => {
      // Use UTC for all calculations to ensure consistency across timezones
      const now = new Date(); // Current UTC time

      // Start date: November 12, 2025 at 12:00 AM PST
      // PST is UTC-8, so midnight PST = 8 AM UTC
      const startDate = new Date('2025-11-12T08:00:00Z'); // Midnight PST in UTC

      // Target date: January 9th, 2026 at 7 AM PST
      // PST is UTC-8, so 7 AM PST = 3 PM UTC (15:00 UTC)
      const targetDate = new Date('2026-01-09T15:00:00Z'); // 7 AM PST in UTC

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

      // Calculate countdown
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        setIsComplete(true);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsComplete(false);
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    };

    calculateProgress();
    // Update every second for countdown
    const interval = setInterval(calculateProgress, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='loading-bar-container'>
      <div className='loading-bar-header'>
        <h1>Countdown to seeing my baby</h1>
        <p className='subtitle'>Progress towards the target date</p>
      </div>

      <div className='progress-card'>
        {!isComplete ? (
          <div className='countdown-display'>
            <div className='countdown-item'>
              <span className='countdown-value'>{countdown.days}</span>
              <span className='countdown-label'>
                {countdown.days === 1 ? 'Day' : 'Days'}
              </span>
            </div>
            <div className='countdown-separator'>:</div>
            <div className='countdown-item'>
              <span className='countdown-value'>
                {String(countdown.hours).padStart(2, '0')}
              </span>
              <span className='countdown-label'>
                {countdown.hours === 1 ? 'Hour' : 'Hours'}
              </span>
            </div>
            <div className='countdown-separator'>:</div>
            <div className='countdown-item'>
              <span className='countdown-value'>
                {String(countdown.minutes).padStart(2, '0')}
              </span>
              <span className='countdown-label'>
                {countdown.minutes === 1 ? 'Minute' : 'Minutes'}
              </span>
            </div>
            <div className='countdown-separator'>:</div>
            <div className='countdown-item'>
              <span className='countdown-value'>
                {String(countdown.seconds).padStart(2, '0')}
              </span>
              <span className='countdown-label'>
                {countdown.seconds === 1 ? 'Second' : 'Seconds'}
              </span>
            </div>
          </div>
        ) : (
          <div className='countdown-complete'>
            <p className='completed-message'>Target reached! 🎉</p>
          </div>
        )}

        <div className='progress-info'>
          <div className='progress-label'>
            <span>Progress</span>
            <span className='progress-percentage'>{progress.toFixed(2)}%</span>
          </div>
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
            <span className='detail-value'>
              November 12, 2025 at 12:00 AM PST
            </span>
          </div>
          <div className='detail-item'>
            <span className='detail-label'>Target Date</span>
            <span className='detail-value'>January 9, 2026 at 7:00 AM PST</span>
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
