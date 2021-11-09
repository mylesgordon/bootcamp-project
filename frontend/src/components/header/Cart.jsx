import OffCanvas from "react-bootstrap/Offcanvas";
import React from "react";

const Cart = ({ showCart, setShowCart, shoppingCart, setShoppingCart }) => {
  return (
    <OffCanvas
      show={showCart}
      placement={"end"}
      onHide={() => setShowCart(false)}
    >
      <OffCanvas.Header closeButton>
        <OffCanvas.Title>Shopping Cart</OffCanvas.Title>
      </OffCanvas.Header>

      <OffCanvas.Body>
        {shoppingCart.map((item) => (
          <h3>{item.title}</h3>
        ))}
      </OffCanvas.Body>
    </OffCanvas>
  );
};

export default Cart;
