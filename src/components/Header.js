import React from "react";
import "./Header.css";
import logo from "./logo.png";

function Header(props) {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div></div>
    </div>
  );
}

export default Header;
