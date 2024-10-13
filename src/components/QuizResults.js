import React from 'react';

const QuizResults = ({ score }) => {
  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <p>Your score is: <span className="score">{score}/3</span></p>
    </div>
  );
};

export default QuizResults;
