// QuizTimer.jsx
import React from 'react';
import { useTimer } from '../hooks/useTimer';

function QuizTimer() {
  const { timeLeft, startTimer } = useTimer(60); // 60 seconds timer

  return (
    <div>
      <h4>Time Left: {timeLeft}s</h4>
      <button onClick={startTimer}>Start Quiz</button>
    </div>
  );
}

export default QuizTimer;
