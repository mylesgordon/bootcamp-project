import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";

const EditItem = ({ editDialog, setEditDialog, fetchItems }) => {
  const [updatedItem, setUpdatedItem] = useState(editDialog.item);

  useEffect(() => {
    setUpdatedItem(editDialog.item);
  }, [editDialog]);

  const hideEditDialog = () => {
    fetchItems();
    setEditDialog({
      isShowing: false,
      item: { name: "", description: "", price: "" },
    });
  };

  const saveEditedItem = async () => {
    await fetch(`http://localhost:3002/api/items/${updatedItem.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedItem),
      headers: {
        "Content-Type": "application/json",
      },
    });

    hideEditDialog();
  };

  return (
    <Modal show={editDialog.isShowing} onHide={hideEditDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="itemName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              value={updatedItem.name}
              onChange={(val) =>
                setUpdatedItem({ ...updatedItem, name: val.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              value={updatedItem.description}
              onChange={(val) =>
                setUpdatedItem({
                  ...updatedItem,
                  description: val.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemPrice">
            <Form.Label>Price:</Form.Label>
            <Form.Control
              value={updatedItem.price}
              onChange={(val) =>
                setUpdatedItem({
                  ...updatedItem,
                  price: val.target.value,
                })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={hideEditDialog}>
          Close
        </Button>
        <Button variant="success" onClick={saveEditedItem}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditItem;
