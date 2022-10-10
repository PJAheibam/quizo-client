import "./App.css";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getTopics, getQuizData } from "./utils/quizDataFetcher";
import Default from "./layouts/Default";
import Quiz from "./components/quiz/Quiz";
import Statistics from "./components/statistics/Statistics";
import Blog from "./components/blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Default />,
      // loader: getTopics,
      children: [
        {
          path: "quiz/:id",
          element: <Quiz />,
          // loader: getQuizData,
        },
        {
          path: "statistics",
          element: <Statistics />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={dark}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
