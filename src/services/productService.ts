// src/services/productService.ts
import { products } from "../data/products";

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id: string) => {
  return products.find((p) => p.id === id);
};
