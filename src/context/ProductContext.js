import React, { createContext, useContext } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const productCollectionRef = collection(db, "products");

  async function addProduct(newProduct) {
    await addDoc(productCollectionRef, newProduct);
  }

  const values = {
    addProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};
export default ProductContext;
