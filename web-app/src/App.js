import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizProvider from "./hooks/quiz-context";

import HomePage from "./pages/home";
import QuizPage from "./pages/quiz";
import ResultsPage from "./pages/results";

import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <div className="App">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<QuizPage />} path="/quiz" />
            <Route element={<ResultsPage />} path="/results" />
          </Routes>
        </div>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;
