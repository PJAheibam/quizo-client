export const guessed = (list) =>
  list.reduce(
    (prevValue, currentValue) => {
      if (currentValue.guessed === "right") {
        return { ...prevValue, correct: prevValue.correct + 1 };
      } else if (currentValue.guessed === "wrong") {
        return { ...prevValue, wrong: prevValue.wrong + 1 };
      } else return prevValue;
    },
    { correct: 0, wrong: 0 }
  );
