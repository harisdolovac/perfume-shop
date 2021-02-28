import React from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../css/Search.css";
import { Link } from "react-router-dom";

const BasketIcon = ({ total }) => {
  return (
    <div className="search_header">
      <span className="search_icons">
        {total === 0 ? (
          <Link to="/shop" style={{ pointerEvents: "none" }}>
            <ShoppingCartIcon className="basket_icon" color="disabled" />
            <strong>
              <span style={{ position: "absolute" }}>{total}</span>
            </strong>
          </Link>
        ) : (
          <Link to="/shop">
            <ShoppingCartIcon className="basket_icon" color="secondary" />
            <strong>
              <span style={{ position: "absolute" }}>{total}</span>
            </strong>
          </Link>
        )}
      </span>
    </div>
  );
};

export default BasketIcon;
