import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

const CreateItem = ({ showCreateDialog, setShowCreateDialog, fetchItems }) => {
  const [itemCategory, setItemCategory] = useState("");
  const [createdItem, setCreatedItem] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const hideCreateDialog = () => {
    setShowCreateDialog(false);
    fetchItems();
  };

  const adminCreateItem = async () => {
    console.log(createdItem);
    await fetch(`http://localhost:3002/api/categories/${itemCategory}/items`, {
      method: "POST",
      body: JSON.stringify(createdItem),
      headers: {
        "Content-Type": "application/json",
      },
    });

    hideCreateDialog();
  };

  return (
    <Modal show={showCreateDialog} onHide={hideCreateDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Create Item</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="itemName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              value={createdItem.name}
              onChange={(val) =>
                setCreatedItem({ ...createdItem, name: val.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              value={createdItem.description}
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
              value={createdItem.price}
              onChange={(val) =>
                setCreatedItem({
                  ...createdItem,
                  price: val.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              value={createdItem.image}
              onChange={(val) =>
                setCreatedItem({
                  ...createdItem,
                  image: val.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemCategory">
            <Form.Label>Category Number:</Form.Label>
            <Form.Control
              value={itemCategory}
              onChange={(val) => setItemCategory(val.target.value)}
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
