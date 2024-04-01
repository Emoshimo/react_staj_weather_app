import React from "react";
import colors from "../utils/colors";
export default function Welcome() {
  return (
    <div
      className="flex font-nunito justify-center items-center flex-col"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      <h2 className="text-2xl" style={{ color: colors.white }}>
        Welcome to <span style={{ color: colors.primary }}>TypeWeather</span>
      </h2>
      <p style={{ color: colors.text }}>
        Choose a location to see the weather forecast
      </p>
    </div>
  );
}
