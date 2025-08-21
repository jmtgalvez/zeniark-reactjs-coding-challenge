import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { useQuizContext } from "../hooks/quiz-context";
import { getQuestion } from "../lib/data";

export default function QuizPage() {
  const { questions, answers, addQuestion, addAnswer, limit } =
    useQuizContext();
  const [currentQuestion, setCurrentQuestion] = useState(undefined);

  async function loadNextQuestion() {
    const newQuestion = await getQuestion(questions);
    setCurrentQuestion(newQuestion);
  }

  async function submitAnswer(answer) {
    addAnswer(answer);
    if (questions.length < limit) await loadNextQuestion();
  }

  useEffect(() => {
    loadNextQuestion();
  }, []);

  useEffect(() => {
    if (currentQuestion) addQuestion(currentQuestion);
  }, [currentQuestion]);

  if (answers.length === limit) {
    return <Navigate to="/results" />;
  }

  return (
    <div className="page page-quiz">
      <div className="page-header">
        <img
          src={require("../images/logo.png")}
          width="60px"
          height="65px"
          alt="logo"
        />
        <p className="page-header-title">
          Category: {currentQuestion?.category}
        </p>
        <p style={{ whiteSpace: "nowrap" }}>
          {questions.length} of {limit}
        </p>
      </div>
      <div className="page-body">
        <p dangerouslySetInnerHTML={{ __html: currentQuestion?.question }} />
      </div>
      <div className="page-control">
        <button className="btn btn-true" onClick={() => submitAnswer("True")}>
          {" "}
          True
        </button>
        <button className="btn btn-false" onClick={() => submitAnswer("False")}>
          {" "}
          False
        </button>
      </div>
    </div>
  );
}
