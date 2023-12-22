// Cart.js
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(AppContext);
  
  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <div>
        {cart.length > 0 &&
          cart.map((pizza) =>{
            console.log(pizza)
            return (
              <div key={pizza.id}>
                <img src={pizza.img} alt="pizza" />
                <p>{pizza.name}</p>
                <div>
                <p>{pizza.price}</p>
                <button onClick={() => removeFromCart(pizza.id)}>Quitar</button>
                </div>
              </div>
            )
          })}
      
      </div>
      <p>Total a pagar: ${calculateTotal()}</p>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;

  {/* {cart.map((pizza) => (
          <li key={pizza.id}>
            {pizza.name} - ${pizza.price}
            <button onClick={() => removeFromCart(pizza.id)}>Quitar</button>
          </li>
        ))} */}
