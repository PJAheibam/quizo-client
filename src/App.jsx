import "./App.css";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getTopics } from "./utils/quizDataFetcher";
import Default from "./layouts/Default";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Default />,
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
