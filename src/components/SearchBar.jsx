import React, { useState } from "react";
import useCityData from "../hooks/useCityData";
import colors from "../utils/colors";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { cityResult, loading } = useCityData(search);
  const [selectedCity, setSelectedCity] = useState(null);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value === "") {
      // Clear cityResult when search input is empty
      setSearch("");
      setSelectedCity(null);
    }
  };

  const handleCitySelect = async (selectedCity) => {
    // Do something with the selected city, like updating state
    setSelectedCity(selectedCity);
    setSearch(`${selectedCity.name}, ${selectedCity.country}`);

    navigate(`/weather/${selectedCity.name}`, { state: { selectedCity } });
  };

  return (
    <div>
      <div
        className="search-container px-4 py-2 rounded-lg"
        style={{ backgroundColor: colors.searchBarBg }}
      >
        <input
          type="text"
          className="search-input w-full lg:w-96 px-2 py-2 rounded bg-transparent focus:outline-none text-gray-100 focus:text-gray-100 placeholder-gray-400 focus:placeholder-gray-400"
          placeholder="Search location"
          value={search}
          onChange={handleSearchChange}
        />
        {loading && (
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            {/* Loading spinner */}
            <div className="spinner-border text-white" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      {cityResult && !selectedCity && search.length > 0 && (
        <div
          className="search-results mt-2 rounded-lg"
          style={{ backgroundColor: colors.searchResultBg }}
        >
          {cityResult.map((city, index) => (
            <div
              key={city.id}
              className="cursor-pointer"
              onClick={() => handleCitySelect(city)}
            >
              <p className="p-4 px-6" style={{ color: colors.white2 }}>
                {city.name}, {city.country}
              </p>
              {index !== cityResult.length - 1 && (
                <hr
                  className="border-b"
                  style={{ borderColor: colors.borderColor }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
