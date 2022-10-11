import { createContext, useContext, useState } from "react";

export const resultType = {
  CORRECT_GUESSED: "correctGuessed",
  WRONG_GUESSED: "wrongGuessed",
  ALL: "all",
};

const ResultContext = createContext();
const UpdateResultContext = createContext();

export const useResult = () => useContext(ResultContext);
export const useUpdateResult = () => useContext(UpdateResultContext);

export default function ResultProvider({ children }) {
  const initialValue = {
    correctGuessed: 0,
    wrongGuessed: 0,
  };
  const [result, setResult] = useState(initialValue);

  const handleUpdate = (property, value) => {
    if (property === resultType.ALL) {
      setResult(value);
    } else if (property === resultType.CORRECT_GUESSED) {
      setResult({ ...result, [property]: result.correctGuessed + 1 });
    } else {
      setResult({ ...result, [property]: result.wrongGuessed + 1 });
    }
  };

  return (
    <ResultContext.Provider value={result}>
      <UpdateResultContext.Provider value={handleUpdate}>
        {" "}
        {children}
      </UpdateResultContext.Provider>
    </ResultContext.Provider>
  );
}
