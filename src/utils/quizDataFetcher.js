import axios from "axios";

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

export const getQuizData = async (id) => {
  try {
    const response = await axios.get(
      `https://openapi.programming-hero.com/api/quiz/$%7Bid%7D`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
