import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/header/Header";
import { Route, IndexRoute } from "react-router";

function App() {
  const [currentUser, setCurrentUser] = useState({ isLoggedIn: false });

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
