import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import pizzas from "../data/pizzas.json";

import Button from "react-bootstrap/Button";

const PizzaCatalog = () => {
  const { addToCart } = useContext(AppContext);
    
  return (
    <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-5">
      {pizzas.map((pizza) => (
        <div className="col mt-5 cardT" key={pizza.id}>
          <div className="card mt-3 border-light" style={{ width: "18rem" }}>
            <img
              src={`${pizza.img}`}
              className="card-img-top"
              alt='pizza'
              style={{ width: "18rem", height: "15rem" }}
            />
            <div className="card-body_name">
              <h3 className="card-name">{pizza.name}</h3>
            </div>
            <h3>Ingredientes</h3>
            <ul>
              {pizza.ingredients.map((ingredient) => {
                return <li key={ingredient}>{ingredient}</li>;
              })}
            </ul>
            <Button
              variant="info"
              style={{ width: "10rem" }}
              onClick={() => addToCart(pizza.id)}
            >
              Agregar al carrito
            </Button>
            <Button
              variant="danger"
              style={{ width: "10rem" }}
              onClick={() => addToCart(pizza.id)}
            >
              <Link to={`/pizza/${pizza.id}`}>Ver Detalles</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PizzaCatalog;
