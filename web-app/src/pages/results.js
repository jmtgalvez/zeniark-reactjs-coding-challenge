import { Link, Navigate } from "react-router-dom";
import { useQuizContext } from "../hooks/quiz-context";

export default function ResultsPage() {
  const { results, startQuiz } = useQuizContext();

  const score = results.reduce((acc, curr) => {
    if (curr.submitted_answer === curr.correct_answer) return acc + 1;
    return acc;
  }, 0);

  if (results.length === 0) return <Navigate to="/" />;

  return (
    <div className="page page-results">
      <div className="page-header">
        <img
          src={require("../images/logo.png")}
          width="60px"
          height="65px"
          alt="logo"
        />
        <p className="page-header-title">Final Results</p>
      </div>
      <div className="page-results-body">
        <div className="page-results-body-score">
          <h1>
            {score}/{results.length}
          </h1>
          <p>Your Score</p>
        </div>
        {results.map((result, index) => (
          <Result key={result.question} result={{ ...result, index }} />
        ))}
      </div>
      <div className="page-control">
        <Link className="btn" to="/">
          HOME
        </Link>
        <button className="btn-link" onClick={startQuiz}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}

function Result({ result }) {
  return (
    <div className="result">
      <p className="result-index">{result.index + 1}.</p>
      <div className="result-content">
        <p
          className="result-content-question"
          dangerouslySetInnerHTML={{ __html: result.question }}
        />
        <p className="result-content-answer">
          The correct answer is{" "}
          <span
            className={`result-content-answer-${result.correct_answer.toLowerCase()}`}
          >
            {result.correct_answer}
          </span>
          . You answered{" "}
          <span
            className={`result-content-answer-${result.submitted_answer.toLowerCase()}`}
          >
            {result.submitted_answer}
          </span>
          .
        </p>
      </div>
      <div className="result-score">
        <p>
          {result.submitted_answer === result.correct_answer ? (
            <CheckSVG />
          ) : (
            <CrossSVG />
          )}
        </p>
      </div>
    </div>
  );
}

function CheckSVG() {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.414 0.586939C28.1953 1.36827 28.1953 2.63091 27.414 3.41225L11.4131 19.414C10.6318 20.1953 9.36927 20.1953 8.58798 19.414L0.585783 11.4131C-0.195261 10.6318 -0.195261 9.36915 0.585783 8.58781C1.36695 7.80648 2.63327 7.80648 3.41457 8.58781L9.94431 15.1698L24.5889 0.586939C25.3702 -0.195646 26.6327 -0.195646 27.414 0.586939Z"
        fill="#83DB14"
      />
    </svg>
  );
}

function CrossSVG() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.589016 16.5878C-0.192173 17.369 -0.192173 18.6345 0.589016 19.4157C0.976484 19.8063 1.48895 20 2.00141 20C2.51386 20 3.02508 19.8047 3.41504 19.4141L10.0008 12.8318L16.5859 19.4125C16.9765 19.8063 17.4883 20 18.0002 20C18.512 20 19.0232 19.8063 19.4141 19.4125C20.1953 18.6314 20.1953 17.3658 19.4141 16.5846L12.8271 9.99766L19.4141 3.4138C20.1953 2.63261 20.1953 1.36708 19.4141 0.585892C18.6329 -0.195297 17.3674 -0.195297 16.5862 0.585892L10.0008 7.176L3.4138 0.589017C2.63261 -0.192172 1.36708 -0.192172 0.585892 0.589017C-0.195297 1.37021 -0.195297 2.63573 0.585892 3.41692L7.17288 10.0039L0.589016 16.5878Z"
        fill="#E33131"
      />
    </svg>
  );
}
