import React, { useState } from "react";
import useCityData from "../hooks/useCityData";
import colors from "../utils/colors";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { cityResult, loading } = useCityData(search);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value === "") {
      // Clear cityResult when search input is empty
      setSearch("");
    }
  };

  const handleCitySelect = (selectedCity) => {
    // Do something with the selected city, like updating state
    console.log("Selected city:", selectedCity);
  };
  return (
    <div>
      <div
        className="search-container px-4 py-2 rounded-lg"
        style={{ backgroundColor: colors.searchBarBg }}
      >
        <input
          type="text"
          className="search-input w-full lg:w-96 px-2 py-2 rounded bg-transparent focus:outline-none focus:text-gray-100 placeholder-gray-400 focus:placeholder-gray-400"
          placeholder="Search location"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      {cityResult && search.length > 0 && (
        <div
          className="search-results mt-2 rounded-lg"
          style={{ backgroundColor: colors.searchResultBg }}
        >
          {/* Render selectable rows for each city in cityResult */}
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
