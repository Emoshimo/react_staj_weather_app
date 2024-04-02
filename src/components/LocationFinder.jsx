import React, { useState } from "react";

const LocationFinder = () => {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      {location && (
        <div>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </div>
      )}
    </div>
  );
};

export default LocationFinder;
