import React from "react";
import luckyBites from "../assets/luckyBites.png";
import "../index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={luckyBites} alt="Logo" width="200px" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
