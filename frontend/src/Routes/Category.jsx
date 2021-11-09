import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import ItemList from "../components/category/ItemList";

function Category({ currentUser, shoppingCart, setShoppingCart }) {
  const { id } = useParams();
  return (
    <main>
      <ItemList
        id={id}
        currentUser={currentUser}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </main>
  );
}

export default Category;
