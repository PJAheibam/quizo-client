export const updateResultToLocalStorage = (
  quizID,
  questionID,
  guessedIndex
) => {
  let quiz = JSON.parse(localStorage.getItem("quiz"));
  if (quiz) {
    if (quiz[quizID])
      quiz[quizID] = [...quiz[quizID], { questionID, guessedIndex }];
    else quiz[quizID] = [{ questionID, guessedIndex }];
    localStorage.setItem("quiz", JSON.stringify(quiz));
  } else {
    quiz = {};
    quiz[quizID] = [{ questionID, guessedIndex }];
    localStorage.setItem("quiz", JSON.stringify(quiz));
  }
};

export const getQuizAnsFromLocalStorage = (quizID, questionID) => {
  const quiz = JSON.parse(localStorage.getItem("quiz"));
  if (quiz) {
    const res = quiz[quizID].find((data) => data.questionID === questionID);
    if (res) return res.guessedIndex;
    else return null;
  } else return null;
};
