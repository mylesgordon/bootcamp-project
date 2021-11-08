import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";

const RegisterDialog = ({ showRegister, setShowRegister }) => {
  const hideRegister = () => {
    setShowRegister(false);
  };

  return (
    <Modal show={showRegister} onHide={hideRegister}>
      <Modal.Header closeButton>
        <Modal.Title>Sign up/Log in</Modal.Title>
      </Modal.Header>

      <Modal.Body>Some form or something</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={hideRegister}>
          Close
        </Button>

        <ButtonGroup>
          <Button variant="success" onClick={hideRegister}>
            Log In
          </Button>
          <Button variant="danger" onClick={hideRegister}>
            Sign Up
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterDialog;
