import React from "react";
import useCurrentDate from "../hooks/useCurrentDate";
import backgroundImage from "../utils/backgrounds/test3_bg.png";
import icon from "../utils/logos/Weather=Few clouds, Moment=Day.png";
import colors from "../utils/colors";
export default function WeatherHeader(city, degree, description) {
  const { weekday, month, dayOfMonth, year } = useCurrentDate();

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
              {city.city}, {city.country}
            </p>
            <p class="text-sm">
              {weekday}, {month} {dayOfMonth}, {year}
            </p>
          </div>
        </div>

        <div class="flex justify-between items-center">
          <div>
            <p class="text-5xl">28°C</p>
            <p class="text-sm">26° / 32°</p>
            <p>Few clouds</p>
          </div>
          <div class="rounded-full">
            <img src={icon} alt="Icon" class="w-56 h-56" />
          </div>
        </div>
      </div>
    </div>
  );
}
