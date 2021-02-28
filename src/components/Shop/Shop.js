import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../css/Shop.css";

const Shop = ({ addedItems, setAddedItems, setTotal }) => {
  const handleRemoveFromBasket = (itemToRemove) => {
    const items = addedItems.filter((item) => item !== itemToRemove);
    setAddedItems(items);
    setTotal(0);
  };

  const handleDecrement = (quantity, id, itemToRemove) => {
    const foundItem = addedItems.findIndex((item) => {
      return item["id"] === id;
    });

    addedItems[foundItem]["quantity"] -= 1;
    setTotal((prevCount) => prevCount - 1);
    setAddedItems([...addedItems]);
    if (quantity === 1) {
      const items = addedItems.filter((item) => item !== itemToRemove);
      setAddedItems(items);
    }
  };

  const handleIncrement = (quantity, id) => {
    const foundItem = addedItems.findIndex((item) => {
      return item["id"] === id;
    });

    addedItems[foundItem]["quantity"] += 1;
    setTotal((prevCount) => prevCount + 1);
    setAddedItems([...addedItems]);
  };

  const handleTotal = () => {
    const totalValue = addedItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    return totalValue;
  };

  if (addedItems.length === 0) {
    return (
      <div style={{ height: "78vh" }}>
        <Link to="/">
          <h1 style={{ textAlign: "center" }}>
            Your card is empty click here to go back
          </h1>
        </Link>
      </div>
    );
  }
  const shopItems = addedItems.map((item, i) => {
    const { id, img, price, title, quantity } = item;

    return (
      <div key={Math.random() * id} className="shop">
        <img src={img} alt="Perfume on card" />
        <div className="shop_card">
          <h3>{title}</h3>
          <div className="buttons_shop">
            <Button
              color="secondary"
              variant="contained"
              onClick={() => handleRemoveFromBasket(item)}
            >
              Remove from basket
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => handleDecrement(quantity, id, item)}
            >
              Decrease
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => handleIncrement(quantity, id, item)}
            >
              Increase
            </Button>
          </div>
        </div>
        <div className="quantity_shop">
          <div>
            <h3>Quantity:</h3> <h2>{quantity}</h2>
          </div>
          <div className="total_shop">
            <h3>Total Amount:</h3> <h2>{quantity * price} $</h2>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="shop_checkout">
      <h3 style={{ textAlign: "center" }}>Your basket:</h3>
      {shopItems}
      <h2>Total checkout: {handleTotal()}$ </h2>
    </div>
  );
};

export default Shop;
