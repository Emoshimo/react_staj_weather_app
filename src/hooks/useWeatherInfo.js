import { useEffect, useState } from "react";

export default function useWeatherInfo(time, weatherDescription) {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const timeOfDay = time === "morning" ? "day" : "night";
    setTimeOfDay(timeOfDay);

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
    const lowerCaseDescription = weatherDescription.toLowerCase();
    const icon = iconMap[lowerCaseDescription] || "clouds";
    setIcon(icon);
  }, [time, weatherDescription]);

  return { timeOfDay, icon };
}
