// QuizCreator.jsx
import React, { useState } from 'react';

function QuizCreator() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: '' }]);
  };

  return (
    <div>
      <h3>Create Quiz</h3>
      {questions.map((q, index) => (
        <div key={index}>
          <input type="text" placeholder="Question" />
          {q.options.map((option, idx) => (
            <input key={idx} type="text" placeholder={`Option ${idx + 1}`} />
          ))}
        </div>
      ))}
      <button onClick={addQuestion}>Add Question</button>
    </div>
  );
}

export default QuizCreator;
