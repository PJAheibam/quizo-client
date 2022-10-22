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

export const getQuizData = async ({ params }) => {
  try {
    const response = await axios.get(
      `https://openapi.programming-hero.com/api/quiz/${params.id}`
    );
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
