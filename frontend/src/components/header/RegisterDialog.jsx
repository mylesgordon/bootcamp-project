import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import RegisterForm from "./RegisterForm";

const RegisterDialog = ({
  showRegister,
  setShowRegister,
  currentUser,
  setCurrentUser,
}) => {
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");

  const hideRegister = () => setShowRegister(false);
  const areInputsValid = () => formEmail && formPassword;

  const createUser = (userRequest) => {
    return fetch("http://localhost:3002/api/users", {
      method: "POST",
      body: JSON.stringify(userRequest),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const logIn = (userRequest) => {
    return fetch(`http://localhost:3002/api/users/${userRequest.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const buttonPressed = async (isSignUp) => {
    const userRequest = { email: formEmail, password: formPassword };

    if (areInputsValid()) {
      try {
        if (isSignUp) {
          await createUser(userRequest);
        }

        const logInRequest = await logIn(userRequest);
        const userJson = await logInRequest.json();

        if (userRequest.password !== userJson.password) {
          throw new Error("Password did not match database");
        }

        setCurrentUser({ isLoggedIn: true, user: userJson });
      } catch {
        alert("Log in/sign up failed. Please check the username and password");
      }
    } else {
      alert("Both username and password are required");
    }
  };

  return (
    <Modal show={showRegister} onHide={hideRegister}>
      <Modal.Header closeButton>
        <Modal.Title>Sign up/Log in</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <RegisterForm
          formEmail={formEmail}
          setFormEmail={setFormEmail}
          formPassword={formPassword}
          setFormPassword={setFormPassword}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={hideRegister}>
          Close
        </Button>
        <ButtonGroup>
          <Button variant="success" onClick={() => buttonPressed(false)}>
            Log In
          </Button>
          <Button variant="danger" onClick={() => buttonPressed(true)}>
            Sign Up
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterDialog;
