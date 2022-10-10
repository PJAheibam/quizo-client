import "./App.css";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import { getTopics } from "./utils/quizDataFetcher";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: getTopics,
    },
  ]);
  return (
    <ThemeProvider theme={dark}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
