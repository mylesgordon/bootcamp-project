import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/header/Header";

function App() {
  const [currentUser, setCurrentUser] = useState({ isLoggedIn: false });

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
