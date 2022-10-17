export const uploatToLocalStorage = (quizID, questions) => {};

//  GET QUIZ DATA FROM LOCAL STORAGE WILL RETURN JSON OBJECT
export const getQuizData = (quizID) => {
  const data = JSON.parse(localStorage.getItem(`quiz-${quizID}`));
  if (data) {
    return data;
  } else {
    return null;
  }
};

// UPLOAD/UPDATE QUIZ DATA TO LOCAL STORAGE
export const updateQuizData = (quizdID, data) => {
  if (data) {
    const uploadData = JSON.stringify(data);
    localStorage.setItem(`quiz-${quizdID}`, uploadData);
  } else {
    console.error("update data is null or undefined!");
  }
};

export const mixQuizData = (apiData, localData) => {};
