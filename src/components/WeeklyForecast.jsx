import React from "react";
import DailyForecast from "./DailyForecast";
import colors from "../utils/colors";

const weeklyData = [
  // Replace with your actual data and icons
  { day: "Mon", iconPath: "path_to_icon", highTemp: "32°C", lowTemp: "26°C" },
  // ... other days
];

export default function WeeklyForecast() {
  return (
    <div
      className="flex justify-between w-3/4 max-w-xl mx-auto p-3 rounded-lg"
      style={{ backgroundColor: colors.rowBackground }}
    >
      {weeklyData.map((data, index) => (
        <DailyForecast
          key={index}
          day={data.day}
          iconPath={data.iconPath}
          highTemp={data.highTemp}
          lowTemp={data.lowTemp}
        />
      ))}
    </div>
  );
}
