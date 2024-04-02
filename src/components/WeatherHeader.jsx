import React from "react";
import useCurrentDate from "../hooks/useCurrentDate";
import backgroundImage from "../utils/backgrounds/clear,day.png";
import icon from "../utils/logos/clear,day.png";

export default function WeatherHeader({ city, values }) {
  const { weekday, month, dayOfMonth, year, time } = useCurrentDate();
  const timeOfDay = time === "morning" ? "day" : "night";

  return (
    <div class="mt-2 flex justify-center items-start">
      <div
        class="bg-cover bg-center text-white p-4 rounded-lg shadow-lg w-5/6 max-w-xl mx-auto"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          height: "40vh",
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
            <img src={icon} alt="Icon" class="w-56 h-56" />
          </div>
        </div>
      </div>
    </div>
  );
}
