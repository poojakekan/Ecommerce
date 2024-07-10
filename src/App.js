
import './App.css';
import Navbar from './Header/Navbar';

import CartContext from "./Store/cart-context";
import React, { useContext } from "react";

function App() {
  const cartCtx = useContext(CartContext);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
