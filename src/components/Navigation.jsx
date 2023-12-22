import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "../assets/imgs/cart-shopping-solid.svg";

const Navigation = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start">
          <Navbar.Text className="text-danger">
            <Link to="/" className="Home">
              <p>Pizzeria Mamma Mia</p>
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
        <Nav className="ms-3">
          <div className="car">
            <span>0</span>
            <Link to="/cart">
              <img src={CartIcon} alt="carrito" width="20" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
