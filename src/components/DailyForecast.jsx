import React from "react";
export default function DailyForecast({ day, iconPath, highTemp, lowTemp }) {
  if (!iconPath) {
    console.log(iconPath);
    return null;
  }
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-gray-200">{day}</p>
      <img
        src={require(`../utils/logos/${iconPath}`)}
        alt="Icon"
        className="h-24"
      />
      <p className="text-lg text-white">{highTemp}°C</p>
      <p className="text-sm text-white opacity-70">{lowTemp}°C</p>
    </div>
  );
}
