import { createContext, useContext, useState } from "react";

const initalValue = {
  correctGuessed: 0,
  wrongGuessed: 0,
};

export const resultType = {
  CORRECT_GUESSED: "correctGuessed",
  WRONG_GUESSED: "wrongGuessed",
};

const ResultContext = createContext();
const UpdateResultContext = createContext();

export const useResult = () => useContext(ResultContext);
export const useUpdateResult = () => useContext(UpdateResultContext);

export default function ResultProvider({ children }) {
  const [result, setResult] = useState(initalValue);

  const handleUpdate = (property) => {
    if (property === resultType.CORRECT_GUESSED) {
      setResult({ ...result, [property]: result.correctGuessed + 1 });
      console.log("right: ", result.correctGuessed + 1);
    } else {
      setResult({ ...result, [property]: result.wrongGuessed + 1 });
      console.log("wrong: ", result.wrongGuessed + 1);
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
