import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./Routes/Home";
import Category from "./Routes/Category";
import NotFound from "./Routes/NotFound";

function App() {
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: false,
    user: {},
  });
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/category/:id"
            exact
            element={
              <Category
                currentUser={currentUser}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
