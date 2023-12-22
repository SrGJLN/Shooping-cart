// PizzaDetail.js
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import pizzas from "../data/pizzas.json";

const PizzaDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(AppContext);

  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div>
      <img src={pizza.img} alt="pizza" />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <h3>Ingredientes</h3>
      <ul>
        {pizza.ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
      <p>Precio: ${pizza.price}</p>
      <button onClick={() => addToCart(pizza)}>Agregar al carrito</button>
    </div>
  );
};

export default PizzaDetail;
