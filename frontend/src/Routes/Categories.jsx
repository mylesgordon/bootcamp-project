import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "../components/header/Header";

function Categories() {
  const [currentUser, setCurrentUser] = useState({ isLoggedIn: false });

  return (
    <main>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <h2>Categories Test</h2>
    </main>
  );
}

export default Categories;
