import { useQuizContext } from "../hooks/quiz-context";

export default function HomePage() {
  const { startQuiz } = useQuizContext();

  return (
    <div className="page page-home">
      <div className="page-header">
        <img src={require("../images/zeniark-logo.png")} alt="logo" />
      </div>
      <div className="page-title">
        <h1>Welcome to the Trivia Challenge!</h1>
      </div>
      <div className="page-body">
        <p>You will be presented with 10 True or False questions.</p>
        <p
          className="btn btn-disabled"
          style={{
            padding: "1rem 15%",
          }}
        >
          Can you score 10/10?
        </p>
      </div>
      <div className="page-control">
        <button className="btn-link" onClick={startQuiz}>
          LET’S START!
        </button>
      </div>
    </div>
  );
}
