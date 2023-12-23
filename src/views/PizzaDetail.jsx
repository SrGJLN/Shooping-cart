// PizzaDetail.js
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import pizzas from "../data/pizzas.json";
import Button from "react-bootstrap/Button";

const PizzaDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(AppContext);

  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div className="card-detail">
      <img className="card-detail-img" src={pizza.img} alt="pizza" />
      <div className="card-detail-text">
        <h2 className="card-detail-name">{pizza.name}</h2>
        <p className="card-detail-desc">{pizza.desc}</p>
        <h3>Ingredientes</h3>
        <ul>
          {pizza.ingredients.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
        </ul>
        <p>Precio: ${pizza.price}</p>
        <Button 
        variant="info"
        onClick={() => addToCart(pizza)}>Agregar al carrito</Button>
      </div>
      
    </div>
  );
};

export default PizzaDetail;
