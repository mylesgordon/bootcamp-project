import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import EditItem from "./EditItem";
import Item from "./Item";
import CreateItem from "./CreateItem";

const ItemList = ({ id, currentUser, shoppingCart, setShoppingCart }) => {
  const categoryId = id;
  const [items, setItems] = useState([]);
  const [CreateDialog, setCreateDialog] = useState({
    isShowing: false,
    item: { name: "", description: "", price: "" },
  });
  const [editDialog, setEditDialog] = useState({
    isShowing: false,
    item: { name: "", description: "", price: "" },
  });

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
              setEditDialog={setEditDialog}
              setCreateDialog={setCreateDialog}
              fetchItems={fetchItems}
              key={item.id}
            />
          ))}

          <EditItem
            editDialog={editDialog}
            setEditDialog={setEditDialog}
            fetchItems={fetchItems}
          />
          <CreateItem
            CreateDialog={CreateDialog}
            setCreateDialog={setCreateDialog}
            fetchItems={fetchItems}
          ></CreateItem>
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
