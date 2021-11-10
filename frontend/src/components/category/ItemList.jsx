import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ id, currentUser, shoppingCart, setShoppingCart }) => {
  const categoryId = id;
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const items = await fetch(
      `http://localhost:3002/api/categories/${categoryId}`
    );
    setItems(await items.json());
  };

  useEffect(() => {
    fetchItems();
  }, [categoryId]);

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
              fetchItems={fetchItems}
              key={item.id}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
