import React from "react";
import colors from "../utils/colors";
export default function WeatherRow() {
  return (
    <div
      className="mt-2 rounded-lg bg-gray-700 p-4 w-5/6 max-w-xl mx-auto"
      style={{ backgroundColor: colors.searchBarBg }}
    >
      <p className="text-white">Hello</p>
    </div>
  );
}
