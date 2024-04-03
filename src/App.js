import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import WeatherPage from "./pages/WeatherPage";

function App() {
  return (
    <BrowserRouter basename="/react_staj_weather_app">
      <Routes>
        <Route path="react_staj_weather_app" element={<MainPage />} />
        <Route path={`/weather/:city`} element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
