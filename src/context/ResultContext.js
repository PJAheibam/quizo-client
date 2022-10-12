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
  const initialValue = [];
  const [result, setResult] = useState(initialValue);

  const handleUpdate = (value) => {
    setResult(value);
    console.log(value);
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
