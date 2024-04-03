import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LocationFinder = ({ onSelect }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const notifyError = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
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
          notifyError("Please Allow Application to Access Your Location!");
          setLoading(false);
        }
      );
    } else {
      notifyError("Geolocation is not supported by this browser.");

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
        notifyError("Error fetching location data. Please try again.");
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
      <ToastContainer />
      {error && <div>{error}</div>}
    </div>
  );
};

export default LocationFinder;
