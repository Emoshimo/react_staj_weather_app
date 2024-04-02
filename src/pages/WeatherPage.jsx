import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import colors from "../utils/colors";
import WeatherHeader from "../components/WeatherHeader";
import WeatherDetail from "../components/WeatherDetail";

export default function WeatherPage() {
  const location = useLocation();
  const { selectedCity } = location.state || {};
  const { lat, lon, name, state } = selectedCity;
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [headerValues, setHeaderValues] = useState({
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    description: "",
  });
  const [dailyWeatherValues, setDailyWeatherValues] = useState([]);
  const apiKey = "a6105d7b44e05a8f176b5c8ecb438776";

  useEffect(() => {
    console.log(selectedCity);
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${apiKey}`
        );
        console.log(response.data);
        setWeatherData(response.data);
        const {
          main: { feels_like, humidity },
          wind: { speed },
        } = response.data.list[0];
        setDailyWeatherValues([feels_like, humidity, speed]);
        const {
          main: { temp, temp_max, temp_min },
        } = response.data.list[0];
        const description = response.data.list[0].weather[0].main;
        setHeaderValues({ temp, temp_max, temp_min, description });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [lat, lon]);

  return (
    <div
      className="mt-0 my-0 flex flex-col justify-start"
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: colors.background,
      }}
    >
      <div className="flex flex-col space-y-4">
        <WeatherHeader city={selectedCity} values={headerValues} />
        <WeatherDetail values={dailyWeatherValues} />
      </div>
    </div>
  );
}
