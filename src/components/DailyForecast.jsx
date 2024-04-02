import React from "react";
import icon from "../utils/logos/Weather=Clear, Moment=Day.png";
export default function DailyForecast({ day, iconPath, highTemp, lowTemp }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-white">{day}</p>
      <img src={icon} alt={`${day} forecast`} className="w-16 h-16" />
      <p className="text-lg text-white">{highTemp}</p>
      <p className="text-sm text-white opacity-70">{lowTemp}</p>
    </div>
  );
}
