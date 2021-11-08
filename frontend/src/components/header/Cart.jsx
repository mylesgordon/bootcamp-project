import OffCanvas from "react-bootstrap/Offcanvas";
import React from "react";

const Cart = ({ showCart, setShowCart }) => {
  return (
    <OffCanvas
      show={showCart}
      placement={"end"}
      onHide={() => setShowCart(false)}
    >
      <OffCanvas.Header closeButton>
        <OffCanvas.Title>Shopping Cart</OffCanvas.Title>
      </OffCanvas.Header>

      <OffCanvas.Body>This is a shopping cart</OffCanvas.Body>
    </OffCanvas>
  );
};

export default Cart;
