import "./App.css";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getTopics, getQuizData } from "./utils/quizDataFetcher";
import Default from "./layouts/Default";
import Quiz from "./components/quiz/Quiz";
import Statistics from "./components/statistics/Statistics";
import Blog from "./components/blog/Blog";
import Topics from "./components/topics/Topics";
import Home from "./layouts/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Default />,
      children: [
        {
          path: "",
          element: <Home />,
          loader: getTopics,
        },
        {
          path: "quiz/:id",
          element: <Quiz />,
          loader: getQuizData,
        },
        {
          path: "statistics",
          element: <Statistics />,
          loader: getTopics,
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
