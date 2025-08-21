import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  function startQuiz() {
    setQuestions([]);
    setAnswers([]);
    navigate("/quiz");
  }

  function addQuestion(question) {
    setQuestions((prev) => [...prev, question]);
  }

  async function addAnswer(answer) {
    setAnswers((prev) => [...prev, answer]);
  }

  const results = questions.map((question, index) => ({
    ...question,
    submitted_answer: answers[index],
  }));

  return (
    <QuizContext.Provider
      value={{
        limit,
        setLimit,
        questions,
        answers,
        startQuiz,
        addQuestion,
        addAnswer,
        results,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
}
