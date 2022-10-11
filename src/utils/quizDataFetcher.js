import axios from "axios";
import { getQuizAnsFromLocalStorage } from "./updateDataToLocalStorage";

export const getTopics = async () => {
  try {
    const response = await axios.get(
      "https://openapi.programming-hero.com/api/quiz"
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuizData = async ({ params }) => {
  try {
    const response = await axios.get(
      `https://openapi.programming-hero.com/api/quiz/${params.id}`
    );
    let data = response.data.data;

    const questions = data.questions.map((item) => ({
      ...item,
      guessedIndex: getQuizAnsFromLocalStorage(data.id, item.id),
    }));
    return { ...data, questions: questions };
  } catch (error) {
    console.log(error);
  }
};
