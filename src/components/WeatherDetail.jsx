import React from "react";
import WeatherRow from "./WeatherRow";
import colors from "../utils/colors";
import temp_icon from "../utils/icons/temp.png";
import wind_icon from "../utils/icons/wind.png";
import humidity_icon from "../utils/icons/humidity.png";

const weatherDetails = [
  {
    iconPath: temp_icon,
    label: "Thermal sensation",
  },
  { iconPath: wind_icon, label: "Wind speed" },
  { iconPath: humidity_icon, label: "Air humidity" },
];
export default function WeatherDetail({ values }) {
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
          value={values.length > index ? values[index] : ""}
        />
      ))}
    </div>
  );
}
