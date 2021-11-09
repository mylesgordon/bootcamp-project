import React from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";

const testData = [
  {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
];

const ItemList = ({ currentUser, shoppingCart, setShoppingCart }) => {
  return (
    <div>
      <Container>
        <Row>
          {testData.map((item) => (
            <Item
              item={item}
              currentUser={currentUser}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
