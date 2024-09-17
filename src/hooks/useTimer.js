// useTimer.js
import { useState, useEffect } from 'react';

export const useTimer = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const startTimer = () => setTimeLeft(initialTime);

  return { timeLeft, startTimer };
};
