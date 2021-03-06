import React from "react";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const Item = ({
  item,
  currentUser,
  shoppingCart,
  setShoppingCart,
  setEditDialog,
  fetchItems,
}) => {
  const currentItem = item;

  const addCartItem = async (item) =>
    fetch("http://localhost:3002/api/cart/updatecart", {
      method: "POST",
      body: `{"UserId": "${currentUser.user.id}", "ItemId": "${item.id}"}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

  const addToCart = async () => {
    if (currentUser.isLoggedIn) {
      try {
        await addCartItem(item);
        setShoppingCart([...shoppingCart, item]);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("You need to be logged in to add this item to your cart");
    }
  };

  const adminDeleteItem = async () => {
    await fetch(`http://localhost:3002/api/items/${currentItem.id}`, {
      method: "DELETE",
    });
    fetchItems();
  };

  const adminButtons = () => {
    if (currentUser.user.id === 1) {
      return (
        <div>
          <div class="buttonClass">
            <div class="buttonClass">
              <Button variant="danger" onClick={adminDeleteItem}>
                Delete Item
              </Button>
            </div>
            <div class="buttonClass">
              <Button
                variant="info"
                onClick={() => {
                  setEditDialog({ isShowing: true, item: currentItem });
                }}
              >
                Edit Item
              </Button>
            </div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Col md={4}>
      <Card className="h-100 card">
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
          <ListGroupItem>Price: ??{item.price}</ListGroupItem>
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
