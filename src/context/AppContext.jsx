import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => [...prevCart, pizza]);
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => prevCart.filter((pizza) => pizza.id !== pizzaId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
