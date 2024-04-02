import { useEffect, useState } from "react";

const useFiveDayForecast = () => {
  const [fiveDayForecast, setFiveDayForecast] = useState([]);

  useEffect(() => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const nextFiveDays = [];

    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = daysOfWeek[date.getDay()];
      nextFiveDays.push(dayOfWeek);
    }

    setFiveDayForecast(nextFiveDays);
  }, []);

  return fiveDayForecast;
};

export default useFiveDayForecast;
