import React, { useState } from "react";

const LocationFinder = () => {
  const [location, setLocation] = useState(null);
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
        setLocation({ city, countryCode });
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
        {loading ? "Fetching Location..." : "Get Location"}
      </button>
      {error && <div>{error}</div>}
      {location && (
        <div>
          City: {location.city}, Country Code: {location.countryCode}
        </div>
      )}
    </div>
  );
};

export default LocationFinder;
