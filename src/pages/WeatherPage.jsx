import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import colors from "../utils/colors";
import WeatherHeader from "../components/WeatherHeader";
import WeatherDetail from "../components/WeatherDetail";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeeklyForecast from "../components/WeeklyForecast";

export default function WeatherPage() {
  const location = useLocation();
  const { selectedCity } = location.state || {};
  const { lat, lon, name, state } = selectedCity;
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dailyWeatherValues, setDailyWeatherValues] = useState([]);
  const [weeklyWeather, setWeeklyWeather] = useState({
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    description: "",
  });
  const [headerValues, setHeaderValues] = useState({
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    description: "",
  });
  const apiKey = "a6105d7b44e05a8f176b5c8ecb438776";

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${apiKey}`
        );
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
        const weeklyData = response.data.list.slice(0, 5).map((item) => {
          return {
            temp: parseInt(item.main.temp),
            temp_max: parseInt(item.main.temp_max),
            temp_min: parseInt(item.main.temp_min),
            description: item.weather[0].main,
          };
        });
        setWeeklyWeather(weeklyData);
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
      className="my-0 flex flex-col justify-start items-start"
      style={{
        height: "100%",
        overflow: "hidden",
        backgroundColor: colors.background,
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{
          minHeight: "100vh",
          overflow: "hidden",
          backgroundColor: colors.background,
        }}
      >
        <div>
          <Header />
          <SearchBar />
        </div>
        <div className="grid grid-cols-1 gap-4 mt-16 items-start lg:grid-cols-3">
          <div className="lg:col-span-1">
            <WeatherDetail values={dailyWeatherValues} />
          </div>
          <div className="lg:col-span-1">
            <WeatherHeader city={selectedCity} values={headerValues} />
          </div>
          <div className="lg:col-span-1">
            <WeeklyForecast values={weeklyWeather} />
          </div>
        </div>
      </div>
    </div>
  );
}
