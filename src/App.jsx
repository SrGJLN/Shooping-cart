// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import PizzaDetail from "./views/PizzaDetail";
import Cart from "./views/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/cart" element={<Cart />} />
        </>
      </Routes>
    </div>
  );
};

export default App;
