import React from "react";
import logo from "../utils/logos/Tipo=Marca.png";
export default function Header() {
  return (
    <div className="flex items-center justify-center mt-4 p-4">
      <img src={logo} alt="Logo"></img>
    </div>
  );
}
