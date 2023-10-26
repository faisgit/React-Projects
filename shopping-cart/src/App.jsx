import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/cart";
import ShopContextProvider from "./context/shop-context";
export default function App() {
  return (

    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart"  element={<Cart />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
  );
}
