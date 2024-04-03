import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const LocationFinder = ({ onSelect }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getLocation = () => {
    setLoading(true);
    setError(null);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationData(latitude, longitude);
        },
        (error) => {
          setError("Error getting location. Please try again.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  const fetchLocationData = (latitude, longitude) => {
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    )
      .then((response) => response.json())
      .then((data) => {
        const city = data.city;
        const countryCode = data.countryCode;
        onSelect(city, countryCode); // Pass city and country code to parent component
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching location data. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={getLocation} disabled={loading}>
        <span>
          <FontAwesomeIcon color="gray" icon={faLocationDot} />
        </span>
      </button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LocationFinder;
