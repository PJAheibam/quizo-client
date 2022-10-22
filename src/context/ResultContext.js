import { createContext, useContext, useState } from "react";
import { updateQuizData } from "../utils/local-storage-helper";

export const GUESSED_TYPE = {
  RIGHT: "right",
  WRONG: "wrong",
  NOT_GUESSED: "not-guessed",
};

const ResultContext = createContext();
const UpdateResultContext = createContext();
const CheckAllAnsContext = createContext();

export const useResult = () => useContext(ResultContext);
export const useUpdateResult = () => useContext(UpdateResultContext);
export const useCheckAll = () => useContext(CheckAllAnsContext);

export default function ResultProvider({ children }) {
  const initialValue = {};
  const [result, setResult] = useState(initialValue);
  const [showAllAnswer, setShowAllAnswer] = useState(false);
  const [focusIndex, setFocusIndex] = useState(null);

  const handleUpdate = (value) => {
    setResult(value);
    // console.info(value);
  };
  const checkAllAns = (quizID, data) => {
    // console.log(result);
    // setRender((prev) => !prev);
    let i = 0;
    for (const questionID in result) {
      if (result[questionID].guessedIndex === null) {
        setFocusIndex(i);
        return;
      } else i++;
    }
    if (focusIndex === null) {
      let updatedResult = result;
      for (const question of data) {
        const { correctAnswer, options, id } = question;
        const { guessedIndex } = updatedResult[id];
        if (options[guessedIndex] === correctAnswer) {
          updatedResult[id].guessed = GUESSED_TYPE.RIGHT;
        } else {
          updatedResult[id].guessed = GUESSED_TYPE.WRONG;
        }
      }
      setShowAllAnswer(true);
      updateQuizData(quizID, updatedResult);
      handleUpdate(updatedResult);
    }
  };

  return (
    <ResultContext.Provider value={result}>
      <UpdateResultContext.Provider value={handleUpdate}>
        <CheckAllAnsContext.Provider
          value={{ focusIndex, checkAllAns, setFocusIndex, showAllAnswer }}
        >
          {children}
        </CheckAllAnsContext.Provider>
      </UpdateResultContext.Provider>
    </ResultContext.Provider>
  );
}
