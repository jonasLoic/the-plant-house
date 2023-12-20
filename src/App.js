import { useEffect, useState } from "react";

import logo from "./assets/logo.png";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import './styles/Layout.css'
import Footer from "./components/Footer";

function App() {
  let savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);


  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
