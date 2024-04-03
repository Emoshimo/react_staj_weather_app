import { useState, useEffect } from "react";
import axios from "axios";

const useCityData = (cityName) => {
  const apiKey = "a6105d7b44e05a8f176b5c8ecb438776";
  const [cityResult, setCityResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const geocodingApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=${apiKey}`;

  useEffect(() => {
    const fetchCityData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(geocodingApiUrl);
        const data = response.data;
        setCityResult(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
      setLoading(false);
    };

    if (cityName) {
      fetchCityData();
    } else {
      // Clear cityResult when cityName is empty
      setCityResult(null);
    }
  }, [cityName, geocodingApiUrl]);

  return { cityResult, loading };
};

export default useCityData;
