export const updateResultToLocalStorage = (
  quizID,
  questionID,
  guessedIndex,
  correctGuessed,
  wrongGuessed
) => {
  let quiz = JSON.parse(localStorage.getItem("quiz"));
  if (quiz) {
    if (quiz[quizID])
      quiz[quizID] = {
        correctGuessed,
        wrongGuessed,
        questions: [...quiz[quizID].questions, { questionID, guessedIndex }],
      };
    else
      quiz[quizID] = {
        correctGuessed,
        wrongGuessed,
        questions: [{ questionID, guessedIndex }],
      };
    localStorage.setItem("quiz", JSON.stringify(quiz));
  } else {
    quiz = {};
    quiz[quizID] = {
      correctGuessed,
      wrongGuessed,
      questions: [{ questionID, guessedIndex }],
    };
    localStorage.setItem("quiz", JSON.stringify(quiz));
  }
};

export const getQuizAnsFromLocalStorage = (quizID, questionID) => {
  const quiz = JSON.parse(localStorage.getItem("quiz"));
  if (quiz && quiz[quizID]) {
    const res = quiz[quizID].questions.find(
      (data) => data.questionID === questionID
    );
    if (res) return res.guessedIndex;
    else return null;
  } else return null;
};

export const getTopicResultInfo = (id) => {
  const quiz = JSON.parse(localStorage.getItem("quiz"));

  if (quiz && quiz[id]) {
    return {
      correctGuessed: quiz[id].correctGuessed || 0,
      wrongGuessed: quiz[id].wrongGuessed || 0,
    };
  } else
    return {
      correctGuessed: 0,
      wrongGuessed: 0,
    };
};
