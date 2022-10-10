import axios from "axios";

export const getTopics = async () => {
  try {
    const response = await axios.get(
      "https://openapi.programming-hero.com/api/quiz"
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getQuizData = async (id) => {
  try {
    const response = await axios.get(
      `https://openapi.programming-hero.com/api/quiz/$%7Bid%7D`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
