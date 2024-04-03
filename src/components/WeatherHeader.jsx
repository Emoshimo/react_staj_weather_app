import React, { useState, useEffect } from "react";
import useCurrentDate from "../hooks/useCurrentDate";
import bg from "../utils/backgrounds/clearsky,day.png";
export default function WeatherHeader({ city, values }) {
  const { weekday, month, dayOfMonth, year, time } = useCurrentDate();
  const [backgroundPath, setBackgroundPath] = useState(bg);
  const timeOfDay = time === "morning" ? "day" : "night";
  const iconMap = {
    "clear sky": "clearsky",
    "few clouds": "fewclouds",
    "scattered clouds": "clouds",
    "broken clouds": "clouds",
    "shower rain": "rain",
    rain: "rain",
    thunderstorm: "storm",
    snow: "clouds",
    mist: "clouds",
  };
  const icon = iconMap[values.description.toLowerCase()] || "clouds";

  const icon_path = icon + "," + timeOfDay + ".png";

  useEffect(() => {
    const backgroundPath = require(`../utils/backgrounds/${icon},${timeOfDay}.png`);
    setBackgroundPath(backgroundPath);
  }, [timeOfDay, icon]);

  return (
    <div class="mt-2 flex justify-center items-start">
      <div
        class="bg-cover bg-center text-white p-4 rounded-lg shadow-lg w-5/6 max-w-xl mx-auto"
        style={{
          backgroundImage: `url(${backgroundPath})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="flex justify-between items-center mb-1">
          <div>
            <p class="text-lg font-semibold">
              {city.name}, {city.country}
            </p>
            <p class="text-sm">
              {weekday}, {month} {dayOfMonth}, {year}
            </p>
          </div>
        </div>

        <div class="flex justify-between items-center">
          <div>
            <p class="text-5xl">{parseInt(values.temp)}°C</p>
            <p class="text-sm">
              {values.temp_min}°C / {values.temp_max}°C
            </p>
            <p>
              {values.description.charAt(0).toUpperCase() +
                values.description.slice(1)}
            </p>
          </div>
          <div class="rounded-full">
            <img
              src={require(`../utils/logos/${icon_path}`)}
              alt="Icon"
              class="w-56 h-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
