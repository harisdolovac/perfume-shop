import React from "react";
import "../css/Card.css";

const Card = ({ img, title, price, quantity, id, handleModal }) => {
  return (
    <div>
      <div className="card" onClick={() => handleModal(id)}>
        <img src={img} alt="parfem" />
        <div className="card_info">
          <h3>{title}</h3>

          <p>price: {price}$</p>

          {quantity && <p>{quantity}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
