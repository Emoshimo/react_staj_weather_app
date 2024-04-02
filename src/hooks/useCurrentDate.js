import React from "react";

// Custom hook to get current date information
export default function useCurrentDate() {
  const currentDate = new Date();

  // Array of weekday names
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = weekdays[currentDate.getDay()]; // Get current weekday

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[currentDate.getMonth()]; // Get current month

  const dayOfMonth = currentDate.getDate(); // Get day of the month
  const year = currentDate.getFullYear(); // Get current year
  const hour = currentDate.getHours();
  const timeOfDay = hour >= 6 && hour < 18 ? "morning" : "night";

  return { weekday, month, dayOfMonth, year, timeOfDay };
}
