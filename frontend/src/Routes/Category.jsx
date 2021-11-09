import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import ItemList from "../components/category/ItemList";

function Category({ shoppingCart, setShoppingCart }) {
  const { id } = useParams();
  return (
    <main>
      <h2>Categories Test</h2>
      <h3>Selected category {id}</h3>
      <ItemList shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
    </main>
  );
}

export default Category;
