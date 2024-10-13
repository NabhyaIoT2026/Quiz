import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TakeQuiz from './components/TakeQuiz';
import QuizResults from './components/QuizResults';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TakeQuiz setScore={setScore} />} />
        <Route path="/results" element={<QuizResults score={score} />} />
      </Routes>
    </Router>
  );
}

export default App;
