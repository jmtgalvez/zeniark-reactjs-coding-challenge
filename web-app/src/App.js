import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import QuizPage from "./pages/quiz";

import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<QuizPage />} path="/quiz" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
