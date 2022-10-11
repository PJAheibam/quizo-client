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
  const [result, setResult] = useState({});

  const handleUpdate = (property, value) => {
    setResult({ ...result, [property]: value });
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
