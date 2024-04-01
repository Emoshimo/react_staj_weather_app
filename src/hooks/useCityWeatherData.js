import { useState, useEffect } from "react";
import axios from "axios";

const useCityWeatherData = (lat, lon) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "a6105d7b44e05a8f176b5c8ecb438776";

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        setWeatherData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeatherData();

    // Clean up function
    return () => {
      // Cancel any ongoing requests when component unmounts
    };
  }, [lat, lon, apiKey]);

  return { weatherData, loading, error };
};
export default useCityWeatherData;
