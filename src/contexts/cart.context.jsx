import { createContext, useState } from "react";

export const CartContext = createContext({
  //isCartOpen: false,
  //setCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  console.log("CartProvider");
  const [isCartOpen, setCartOpen] = useState(false);
  const value = { isCartOpen, setCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
