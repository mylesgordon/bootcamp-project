import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import EditItem from "./EditItem";
import Item from "./Item";
import CreateItem from "./CreateItem";

const ItemList = ({ id, currentUser, shoppingCart, setShoppingCart }) => {
  const categoryId = id;
  const [items, setItems] = useState([]);

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [editDialog, setEditDialog] = useState({
    isShowing: false,
    item: { name: "", description: "", price: "" },
  });

  const adminCreateButton = () => {
    if (currentUser.user.id === 1) {
      return (
        <Button variant="success" onClick={() => setShowCreateDialog(true)}>
          Create Item
        </Button>
      );
    } else {
      return <></>;
    }
  };

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
          {adminCreateButton()}
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

          <EditItem
            editDialog={editDialog}
            setEditDialog={setEditDialog}
            fetchItems={fetchItems}
          />
          <CreateItem
            showCreateDialog={showCreateDialog}
            setShowCreateDialog={setShowCreateDialog}
            fetchItems={fetchItems}
          ></CreateItem>
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
