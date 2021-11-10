import React from "react";
import {
  Button,
  Card,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const Item = ({
  item,
  currentUser,
  shoppingCart,
  setShoppingCart,
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

  const adminDeleteButton = () => {
    if (currentUser.user.id === 1) {
      return (
        <Button variant="danger" onClick={adminDeleteItem}>
          Delete Item
        </Button>
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

        {adminDeleteButton()}
      </Card>
    </Col>
  );
};

export default Item;
