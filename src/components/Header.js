import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import BasketIcon from "./assets/BasketIcon";

const Header = ({ total }) => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Perfumes Shop</h1>
      </Link>
      <BasketIcon total={total} />
    </div>
  );
};

export default Header;
