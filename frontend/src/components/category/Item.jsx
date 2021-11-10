import React from "react";
import {
  Button,
  Card,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import EditItem from "./EditItem";

const Item = ({
  item,
  currentUser,
  shoppingCart,
  setShoppingCart,
  showEditDialog,
  setShowEditDialog,
  fetchItems,
}) => {
  const itemId = item.id;

  const addToCart = () => {
    if (currentUser.isLoggedIn) {
      setShoppingCart([...shoppingCart, item]);
    } else {
      alert("You need to be logged in to add this item to your cart");
    }
  };

  const adminDeleteItem = async () => {
    await fetch(`http://localhost:3002/api/items/${itemId}`, {
      method: "DELETE",
    });
    fetchItems();
  };

  const adminButtons = () => {
    if (currentUser.user.id === 1) {
      return (
        <div>
          <Button variant="danger" onClick={adminDeleteItem}>
            Delete Item
          </Button>
          <Button
            variant="info"
            onClick={() => {
              setShowEditDialog(true);
            }}
          >
            Edit Item
          </Button>

          <EditItem
            item={item}
            showEditDialog={showEditDialog}
            setShowEditDialog={setShowEditDialog}
            fetchItems={fetchItems}
          />
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={item.image} className="item-image" />
        <Card.Header>
          <Card.Title style={{ textAlign: "center" }}>{item.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text style={{ textAlign: "center" }}>
            {item.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: £{item.price}</ListGroupItem>
        </ListGroup>

        <Button variant="primary" onClick={addToCart}>
          Add to cart
        </Button>

        {adminButtons()}
      </Card>
    </Col>
  );
};

export default Item;
