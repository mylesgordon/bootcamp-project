import Button from "react-bootstrap/Button";
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
        <Button variant="primary" onClick={hideRegister}>
          Log In
        </Button>
        <Button variant="primary" onClick={hideRegister}>
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterDialog;
