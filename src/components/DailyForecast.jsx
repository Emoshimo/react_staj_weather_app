import React from "react";
import icon from "../utils/logos/clear,day.png";
export default function DailyForecast({ day, iconPath, highTemp, lowTemp }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-gray-200">{day}</p>
      <img src={icon} alt={`${day} forecast`} className="h-32" />
      <p className="text-lg text-white">{highTemp}</p>
      <p className="text-sm text-white opacity-70">{lowTemp}</p>
    </div>
  );
}
