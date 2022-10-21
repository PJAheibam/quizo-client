import { createContext, useContext, useState } from "react";

export const resultType = {
  CORRECT_GUESSED: "correctGuessed",
  WRONG_GUESSED: "wrongGuessed",
  ALL: "all",
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
  const [checkAllAns, setCheckAllAns] = useState(false);
  const handleUpdate = (value) => {
    setResult(value);
    console.log(value);
  };

  return (
    <ResultContext.Provider value={result}>
      <UpdateResultContext.Provider value={handleUpdate}>
        <CheckAllAnsContext.Provider value={[checkAllAns, setCheckAllAns]}>
          {children}
        </CheckAllAnsContext.Provider>
      </UpdateResultContext.Provider>
    </ResultContext.Provider>
  );
}
