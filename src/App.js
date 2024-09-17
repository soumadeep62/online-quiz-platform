// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CreateQuizPage from './pages/CreateQuizPage';
import TakeQuizPage from './pages/TakeQuizPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateQuizPage />} />
        <Route path="/take" element={<TakeQuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
