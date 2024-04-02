import React from "react";
import WeatherRow from "./WeatherRow";
import colors from "../utils/colors";
import temp_icon from "../utils/icons/temp.png";
import rain_icon from "../utils/icons/rain.png";
import wind_icon from "../utils/icons/wind.png";
import humidity_icon from "../utils/icons/humidity.png";
import uv_icon from "../utils/icons/uv.png";

const weatherDetails = [
  {
    iconPath: temp_icon,
    label: "Thermal sensation",
    value: "26°C",
  },
  { iconPath: rain_icon, label: "Probability of rain" },
  { iconPath: wind_icon, label: "Wind speed" },
  { iconPath: humidity_icon, label: "Air humidity" },
  { iconPath: uv_icon, label: "UV Index" },
];
export default function WeatherDetail({ value }) {
  return (
    <div
      className="flex flex-col divide-y divide-gray-700 w-5/6 max-w-xl mx-auto rounded-lg"
      style={{ backgroundColor: colors.rowBackground }}
    >
      {weatherDetails.map((detail, index) => (
        <WeatherRow
          key={index}
          iconPath={detail.iconPath}
          label={detail.label}
          value={value}
        />
      ))}
    </div>
  );
}
