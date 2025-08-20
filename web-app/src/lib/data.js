import questions from "./questions.json";
import { shuffle } from "./utils";

export const loadQuestions = async () => {
  return questions.results;
};

export const getQuestion = async (usedQuestions) => {
  const questions = await loadQuestions();
  const filteredQuestions = questions.filter(
    (question) => !usedQuestions.includes(question.question)
  );
  const newQuestion =
    shuffle(filteredQuestions)[
      Math.floor(Math.random() * filteredQuestions.length)
    ];
  return newQuestion;
};
