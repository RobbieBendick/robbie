import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingBar.scss';

const PROGRESS_MILESTONES = [
  { id: 'q1', pct: 25, label: '1/4' },
  { id: 't1', pct: 100 / 3, label: '1/3' },
  { id: 'h', pct: 50, label: '1/2' },
  { id: 't2', pct: (200 / 3), label: '2/3' },
  { id: 'q3', pct: 75, label: '3/4' },
];

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
      const now = new Date();

      // Midnight March 27, 2026 in California (PDT → UTC-7)
      const startDate = new Date('2026-03-27T07:00:00Z');

      // May 23, 2026 at 7:00 AM California time (PDT → UTC-7)
      const targetDate = new Date('2026-05-23T14:00:00Z');

      const totalDays = (targetDate - startDate) / (1000 * 60 * 60 * 24);
      const daysPassed = (now - startDate) / (1000 * 60 * 60 * 24);

      const calculatedProgress = Math.min(
        100,
        Math.max(0, (daysPassed / totalDays) * 100),
      );
      setProgress(calculatedProgress);

      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        setIsComplete(true);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsComplete(false);

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    calculateProgress();
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
          <div className='progress-bar-track'>
            <div className='progress-bar-background'>
              <motion.div
                className='progress-bar-fill'
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            <div
              className='progress-bar-milestones'
              aria-hidden='true'
            >
              {PROGRESS_MILESTONES.map(({ id, pct, label }) => (
                <div
                  key={id}
                  className={`milestone${progress >= pct ? ' milestone--reached' : ''}`}
                  style={{ left: `${pct}%` }}
                >
                  <span className='milestone-tick' />
                  <div className='milestone-label-wrap'>
                    <span className='milestone-label'>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='progress-details'>
          <div className='detail-item'>
            <span className='detail-label'>Start Date</span>
            <span className='detail-value'>March 27, 2026 at 12:00 AM PDT</span>
          </div>
          <div className='detail-item'>
            <span className='detail-label'>Target Date</span>
            <span className='detail-value'>May 23, 2026 at 7:00 AM PDT</span>
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
