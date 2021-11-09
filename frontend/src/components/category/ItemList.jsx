import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ id, currentUser, shoppingCart, setShoppingCart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(id);
    const fetchItems = async () => {
      const items = await fetch(`http://localhost:3002/api/categories/${id}`);
      setItems(await items.json());
    };

    fetchItems();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {items.map((item) => (
            <Item
              item={item}
              currentUser={currentUser}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              key={item.id}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
