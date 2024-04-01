import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Welcome from "../components/Welcome";
import backgroundImage from "../utils/backgrounds/search_background.png";
import colors from "../utils/colors";
export default function MainPage() {
  return (
    <div
      className="mt-0 my-0"
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: colors.background,
      }}
    >
      <div className="h-screen flex justify-center items">
        <div
          className="bg-cover bg-center flex flex-col max-w-screen-2xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            height: "100vh",
            flex: 1,
          }}
        >
          <Header />
          <div className="flex-grow flex justify-center items-center flex-col space-y-4 pb-32">
            <Welcome />
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}
