import React from "react";

export default function QuizPage() {
  return (
    <div className="page page-quiz">
      <div className="page-header">
        <img
          src={require("../images/logo.png")}
          width="60px"
          height="65px"
          alt="logo"
        />
        <p className="page-title">Category: Geography</p>
        <p>1 of 10</p>
      </div>
      <div className="page-body">
        <p>Greenland is almost as big as Africa.</p>
      </div>
      <div className="page-control">
        <button className="btn btn-true"> True</button>
        <button className="btn btn-false"> False</button>
      </div>
    </div>
  );
}
