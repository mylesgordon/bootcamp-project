import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import RegisterDialog from "./RegisterDialog";

const User = ({
  currentUser,
  setCurrentUser,
  shoppingCart,
  setShoppingCart,
}) => {
  const [showCart, setShowCart] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const showDialog = () => setShowRegister(true);

  if (currentUser.isLoggedIn) {
    return (
      <>
        <h3>{currentUser.user.email}</h3>
        <div className="cartButton">
          <Button
            variant="info"
            onClick={() => {
              setShowCart(true);
            }}
          >
            Cart
          </Button>
        </div>

        <Cart
          currentUser={currentUser}
          showCart={showCart}
          setShowCart={setShowCart}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      </>
    );
  } else {
    return (
      <>
        <Button variant="danger" onClick={showDialog}>
          Sign Up/Log in
        </Button>

        <RegisterDialog
          showRegister={showRegister}
          setShowRegister={setShowRegister}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </>
    );
  }
};

export default User;
