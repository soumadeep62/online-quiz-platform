// QuizTaker.jsx
import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function QuizTaker() {
  const { quiz } = useContext(QuizContext);

  return (
    <div>
      <h3>Take Quiz</h3>
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
          {question.options.map((option, idx) => (
            <button key={idx}>{option}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default QuizTaker;
