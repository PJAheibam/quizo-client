import "./App.css";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { getTopics } from "./utils/quizDataFetcher";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Routes>
        <Route path="/" element={<Home />} loader={getTopics}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
