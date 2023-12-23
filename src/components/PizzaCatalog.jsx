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
              src={pizza.img}
              className="card-img-top"
              alt="pizza"
              style={{ width: "18rem", height: "15rem" }}
            />
            <div className="card-body_name">
              <h3 className="card-name-pizza">{pizza.name}</h3>
            </div>
            <h4 className="card-name-ingredient">Ingredientes</h4>
            <ul>
              {pizza.ingredients.map((ingredient) => {
                return <li key={ingredient}>{ingredient}</li>;
              })}
            </ul>
            <h4>Precio: ${pizza.price}</h4>
            <Button
              className="btn_cart_cat"
              variant="info"
              style={{ width: "10rem" }}
              onClick={() => addToCart(pizza)}
            >
              Agregar al carrito
            </Button>
            <Button
              className="btn_det_cat"
              variant="danger"
              style={{ width: "10rem" }}
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
