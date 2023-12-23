// Cart.js
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(AppContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <div className="card-cart">
        {cartItems.length > 0 &&
          cartItems.map((pizza) => (
            <div className="card-cart-id" key={pizza.id}>
              <img
                className="card-cart-img"
                src={pizza.img}
                alt="pizza"
                style={{ width: "8rem", height: "5rem" }}
              />
              <p className="card-cart-name">{pizza.name}</p>
              <div className="card-cart-btn-right">
                <p className="card-cart-price">${pizza.price}</p>
                <p>{pizza.quantity}</p>
                <Button
                  className="card-cart-btn-ad"
                  variant="info"
                  onClick={() => addToCart(pizza)}
                >
                  Agregar
                </Button>
                <Button
                  className="card-cart-btn-de"
                  variant="danger"
                  onClick={() => removeFromCart(pizza)}
                >
                  Quitar
                </Button>
              </div>
            </div>
          ))}
      </div>

      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center">
          <h3 className="text-lg font-bold">Total: ${getCartTotal()}</h3>
          <Button
            className="card-cart-btn-cl"
            variant="success"
            onClick={() => {
              clearCart();
            }}
          >
            Vaciar carrito
          </Button>
        </div>
      ) : (
        <h2 className="text-lg font-bold">El carro esta vacio</h2>
      )}
    </div>
  );
};

export default Cart;
