import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import RegisterDialog from "./RegisterDialog";

const User = ({ currentUser, setCurrentUser }) => {
  const [showRegister, setShowRegister] = useState(false);

  const showDialog = () => setShowRegister(true);

  if (currentUser.isLoggedIn) {
    // temporary until we sort out user state
    return <h3>{currentUser.email}</h3>;
  } else {
    return (
      <>
        <Button variant="danger" onClick={showDialog}>
          Sign Up
        </Button>

        <RegisterDialog
          showRegister={showRegister}
          setShowRegister={setShowRegister}
          setCurrentUser={setCurrentUser}
        />
      </>
    );
  }
};

export default User;
