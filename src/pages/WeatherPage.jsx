import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import colors from "../utils/colors";
import WeatherHeader from "../components/WeatherHeader";
import WeatherRow from "../components/WeatherRow";
import WeatherDetail from "../components/WeatherDetail";

export default function WeatherPage() {
  const location = useLocation();
  const { selectedCity } = location.state || {};
  const { lat, lon, country, name, state } = selectedCity;
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "a6105d7b44e05a8f176b5c8ecb438776";

  useEffect(() => {
    console.log(selectedCity.name);
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        setWeatherData(response.data);
        console.log(response.data);
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
        <WeatherHeader city={name} />
        <WeatherDetail />
      </div>
    </div>
  );
}
