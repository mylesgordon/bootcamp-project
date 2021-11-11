import OffCanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";

const Cart = ({
  currentUser,
  showCart,
  setShowCart,
  shoppingCart,
  setShoppingCart,
}) => {
  const [cartServerInstance, setCartServerInstance] = useState([]);

  const fetchCartServerInstance = async () => {
    const cart = await fetch(
      `http://localhost:3002/api/cart/${currentUser.user.id}`
    );
    return await cart.json();
  };

  const fetchItemFromId = async (id) => {
    const item = await fetch(`http://localhost:3002/api/items/${id}`);
    return await item.json();
  };

  useEffect(async () => {
    try {
      const cartIds = await fetchCartServerInstance();

      let items = [];
      for (let i = 0; i < cartIds.length; i++) {
        const item = await fetchItemFromId(cartIds[i].ItemId);
        item.cartID = cartIds[i].id;
        items.push(item);
      }

      setCartServerInstance(items);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, [shoppingCart]);

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
        {cartServerInstance.map((item) => (
          <div key={item.cartID}>
            <h5>{item.name}</h5>&nbsp;£{item.price}
            <span className="cartButton">
              <Button variant="danger" onClick={console.log("click")}>
                Delete item
              </Button>
            </span>
          </div>
        ))}
      </OffCanvas.Body>
    </OffCanvas>
  );
};

//in offcanvas body
/*
{shoppingCart.map((item) => {
  <div><h5>{item.name}<h5>&nbsp;£{item.price}</div>
  <Button varaint="danger" onClick={...}>Delete item</Button>
})}
*/
export default Cart;
