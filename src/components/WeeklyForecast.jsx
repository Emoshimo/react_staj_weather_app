import React, { useState, useEffect } from "react";
import DailyForecast from "./DailyForecast";
import colors from "../utils/colors";
import useFiveDayForecast from "../hooks/useFiveDaysForecast";

export default function WeeklyForecast({ values }) {
  const fiveDayForecast = useFiveDayForecast();
  const [iconPaths, setIconPaths] = useState([]);
  const timeOfDay = "day";
  const iconMap = {
    "clear sky": "clearsky",
    "few clouds": "fewclouds",
    "scattered clouds": "clouds",
    "broken clouds": "clouds",
    "shower rain": "rain",
    rain: "rain",
    thunderstorm: "storm",
    snow: "snow",
    mist: "clouds",
  };

  useEffect(() => {
    try {
      if (values && typeof values === "object") {
        const valuesArray = Object.values(values);
        const iconPaths = valuesArray.map((item) => {
          const description = item.description;
          const icon = iconMap[description.toLowerCase()] || "clouds";
          return `${icon},${timeOfDay}.png`;
        });
        setIconPaths(iconPaths);
      }
    } catch (error) {
      console.error("Error occurred while processing values:", error);
    }
  }, [values]);

  return (
    <div
      className="flex justify-between w-3/4 max-w-xl mx-auto p-3 rounded-lg"
      style={{ backgroundColor: colors.rowBackground }}
    >
      {iconPaths.map((data, index) => (
        <DailyForecast
          key={index}
          iconPath={iconPaths[index]}
          day={fiveDayForecast[index].slice(0, 3)}
          highTemp={values[index].temp_max}
          lowTemp={values[index].temp_min}
        />
      ))}
    </div>
  );
}
