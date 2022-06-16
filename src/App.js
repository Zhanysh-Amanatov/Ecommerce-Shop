import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import ProfileInfo from "./components/pages/ProfileInfo";
import Checkout from "./components/pages/Checkout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Cart />} />
          <Route path="/profileInfo" element={<ProfileInfo />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
