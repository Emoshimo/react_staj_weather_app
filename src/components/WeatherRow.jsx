import React from "react";
import colors from "../utils/colors";
export default function WeatherRow({ iconPath, label, value }) {
  console.log(label);
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center">
        <img src={iconPath} alt={`${label} icon`} className="w-6 h-6 mr-4" />
        <span className="text-lg" style={{ color: colors.text }}>
          {label}
        </span>
      </div>
      <span className="text-lg text-white">
        {value}
        {label === "Wind speed" && " Km/h"}
        {label === "Thermal sensation" && " °C"}
        {label === "Air humidity" && " %"}
      </span>
    </div>
  );
}
