import { useState, useEffect } from "react";
import axios from "axios";

const useCityData = (cityName) => {
  const apiKey = "a6105d7b44e05a8f176b5c8ecb438776";
  const [cityResult, setCityResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const geocodingApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=${apiKey}`;

  useEffect(() => {
    const fetchCityData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(geocodingApiUrl);
        setCityResult(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
      setLoading(false);
    };

    if (cityName) {
      fetchCityData();
    }
  }, [cityName, geocodingApiUrl]);

  return { cityResult, loading };
};

export default useCityData;
