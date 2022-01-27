import { Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterPage from "./Pages/CharacterPage";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <header>
        <br />
      </header>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
