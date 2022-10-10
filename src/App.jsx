import "./App.css";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Routes>
        <Route path="/" element={Home}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
