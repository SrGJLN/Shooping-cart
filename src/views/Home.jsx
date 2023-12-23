// Home.js
import HeaderImage from "../components/HeaderImage";
import PizzaCatalog from "../components/PizzaCatalog";

const Home = () => {
  return (
    <div>
      <HeaderImage />
      <h2 className="text-catalogo">Catálogo de Pizzas</h2>
      <PizzaCatalog />
    </div>
  );
};

export default Home;
