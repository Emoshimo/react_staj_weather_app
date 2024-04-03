import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import WeatherPage from "./pages/WeatherPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={`/weather/:city`} element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
