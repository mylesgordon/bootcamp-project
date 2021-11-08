import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import RegisterForm from "./RegisterForm";

const RegisterDialog = ({ showRegister, setShowRegister, setCurrentUser }) => {
  const hideRegister = () => setShowRegister(false);
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");

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
          <Button
            variant="success"
            onClick={() =>
              console.log(`Log in attempt: ${formEmail} with ${formPassword}`)
            }
          >
            Log In
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              console.log(`Sign up attempt: ${formEmail} with ${formPassword}`)
            }
          >
            Sign Up
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterDialog;
