import { useEffect, useState } from "react";

import { getQuestion } from "../lib/data";

export default function QuizPage() {
  const LIMIT = 10;
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(undefined);

  async function loadNextQuestion() {
    const newQuestion = await getQuestion(questions);
    setCurrentQuestion(newQuestion);
  }

  async function submitAnswer(answer) {
    setAnswers([...answers, answer]);
    await loadNextQuestion();
  }

  const gameHasEnded = answers.length === LIMIT;

  useEffect(() => {
    loadNextQuestion();
  }, []);

  useEffect(() => {
    if (currentQuestion) setQuestions((prev) => [...prev, currentQuestion]);
  }, [currentQuestion]);

  if (gameHasEnded) {
    return <p>Results</p>;
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
        <p className="page-title">Category: {currentQuestion?.category}</p>
        <p style={{ whiteSpace: "nowrap" }}>
          {questions.length} of {LIMIT}
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
