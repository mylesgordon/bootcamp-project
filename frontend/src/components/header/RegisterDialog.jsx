import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import RegisterForm from "./RegisterForm";

const RegisterDialog = ({ showRegister, setShowRegister, setCurrentUser }) => {
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");

  const hideRegister = () => setShowRegister(false);
  const areInputsValid = () => formEmail && formPassword;

  const buttonPressed = (signUp) => {
    if (!areInputsValid()) {
      alert("Both username and password are required");
      return;
    } else {
      console.log(signUp ? "Signup:" : "Login:");
      console.log(`Attempt: ${formEmail} with ${formPassword}`);
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
