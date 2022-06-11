import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({

});

export const ProductsProvider = ({ children }) => {
  console.log("ProductsProvider");
  const [products] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
