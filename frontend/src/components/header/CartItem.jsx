import React from "react";
import Button from "react-bootstrap/Button";

const CartItem = ({ item, deleteItemFromCart }) => {
  const itemTest = item;
  return (
    <div key={itemTest.cartID}>
      <h5>{itemTest.name}</h5>&nbsp;£{itemTest.price}
      <span className="cartButton">
        <Button
          variant="danger"
          onClick={() => deleteItemFromCart(item.cartID)}
        >
          Delete item
        </Button>
      </span>
    </div>
  );
};

export default CartItem;
