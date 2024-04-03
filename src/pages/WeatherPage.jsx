import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import colors from "../utils/colors";
import WeatherHeader from "../components/WeatherHeader";
import WeatherDetail from "../components/WeatherDetail";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeeklyForecast from "../components/WeeklyForecast";
import TempChart from "../components/TempChart";

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
  const [tempChangeData, setTempChangeData] = useState();
  const [humidityChangeData, setHumidityChangeData] = useState();

  const apiKey = "a6105d7b44e05a8f176b5c8ecb438776";

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );
        setWeatherData(response.data);
        const { list } = response.data;
        console.log(list);
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
        const indices = [0, 7, 14, 21, 35];

        const weeklyData = indices.map((index) => {
          return {
            temp: parseInt(list[index].main.temp),
            temp_max: parseInt(list[index].main.temp_max),
            temp_min: parseInt(list[index].main.temp_min),
            description: list[index].weather[0].main,
          };
        });

        const formattedData = indices.map((index) => {
          const item = list[index];
          const date = new Date(item.dt_txt);
          const day = date.getDate();
          const month = date.getMonth() + 1;

          return {
            value: parseInt(item.main.temp),
            date: `${day}/${month}`,
          };
        });
        setTempChangeData(formattedData);
        const formattedHumidityData = indices.map((index) => {
          const item = list[index];
          const date = new Date(item.dt_txt);
          const day = date.getDate();
          const month = date.getMonth() + 1;

          return {
            value: parseInt(item.main.humidity),
            date: `${day}/${month}`,
          };
        });
        setWeeklyWeather(weeklyData);
        setHumidityChangeData(formattedHumidityData);
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
        <div className="grid grid-cols-1 gap-4 mt-16 items-center lg:grid-cols-3">
          <div className="lg:col-span-1">
            <WeatherHeader city={selectedCity} values={headerValues} />
          </div>
          <div className="lg:col-span-1">
            <WeatherDetail values={dailyWeatherValues} />
          </div>
          <div className="lg:col-span-1">
            <WeeklyForecast values={weeklyWeather} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 mt-4 w-full lg:grid-cols-3">
          <div className="lg:col-span-1">
            <TempChart data={tempChangeData} label={"Temperature"} />
          </div>
          <div className="lg:col-span-1">
            <TempChart data={humidityChangeData} label={"Humidity"} />
          </div>
          <div className="lg:col-span-1">
            <TempChart data={tempChangeData} />
          </div>
        </div>
      </div>
    </div>
  );
}
