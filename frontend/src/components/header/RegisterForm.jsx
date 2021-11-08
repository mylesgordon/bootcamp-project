import Form from "react-bootstrap/Form";
import React from "react";

const RegisterForm = ({
  formEmail,
  setFormEmail,
  formPassword,
  setFormPassword,
}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          type="email"
          placeholder="niko.avocado@something.com"
          value={formEmail}
          onChange={(val) => setFormEmail(val.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password..."
          value={formPassword}
          onChange={(val) => setFormPassword(val.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default RegisterForm;
