import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TakeQuiz = ({ setScore }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const navigate = useNavigate();

  const quiz = {
    title: 'General Knowledge Quiz',
    description: 'Answer the following multiple-choice questions to test your knowledge.',
    questions: [
      { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
      { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
      { question: 'Who wrote "To Kill a Mockingbird"?', options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Ernest Hemingway'], answer: 'Harper Lee' }
    ]
  };

  const handleAnswerChange = (questionIndex, option) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: option });
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    quiz.questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) score += 1;
    });
    setScore(score);
    navigate('/results');
  };

  return (
    <div className="quiz-container">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>
      {quiz.questions.map((q, index) => (
        <div key={index} className="quiz-question">
          <h4>{q.question}</h4>
          <div className="quiz-options">
            {q.options.map((option, i) => (
              <label key={i} className="quiz-option">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button className="submit-btn" onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default TakeQuiz;
