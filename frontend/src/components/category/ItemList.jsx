import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ id, currentUser, shoppingCart, setShoppingCart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await fetch("http://localhost:3002/items");
      setItems(await items.json());
    };

    fetchItems();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {
            // FIXME: add item.id as a key
            items.map((item) => (
              <Item
                item={item}
                currentUser={currentUser}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
