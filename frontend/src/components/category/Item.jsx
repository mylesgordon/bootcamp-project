import React from "react";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const Item = ({ item, shoppingCart, setShoppingCart }) => {
  const addToCart = () => {
    setShoppingCart([...shoppingCart, item]);
  };

  return (
    <Col md={4}>
      <Card>
        <Card.Img
          variant="top"
          src={item.image}
          className="mx-auto item-image"
        />

        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {item.price}</ListGroupItem>
        </ListGroup>

        <Card.Body>
          <Button variant="primary" onClick={addToCart}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
