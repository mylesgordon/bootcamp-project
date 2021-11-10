import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";

const CreateItem = ({ CreateDialog, setCreateDialog, fetchItems }) => {
  const [createdItem, setCreatedItem] = useState("");

  useEffect(() => {
    setCreatedItem("");
  }, [CreateDialog]);

  const hideCreateDialog = () => {
    fetchItems();
    setCreateDialog({
      isShowing: false,
      item: { name: "", description: "", price: "" },
    });
  };

  const adminCreateItem = async () => {
    await fetch("http://localhost:3002/api/items", {
      method: "POST",
      body: JSON.stringify(createdItem),
      headers: {
        "Content-Type": "application/json",
      },
    });

    hideCreateDialog();
  };

  return (
    <Modal show={CreateDialog.isShowing} onHide={hideCreateDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Create Item</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="itemName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              value=""
              onChange={(val) =>
                setCreatedItem({ ...createdItem, name: val.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              value=""
              onChange={(val) =>
                setCreatedItem({
                  ...createdItem,
                  description: val.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemPrice">
            <Form.Label>Price:</Form.Label>
            <Form.Control
              value=""
              onChange={(val) =>
                setCreatedItem({
                  ...createdItem,
                  price: val.target.value,
                })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideCreateDialog}>
          Close
        </Button>
        <Button variant="success" onClick={adminCreateItem}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateItem;
