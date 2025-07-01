export const API_BASE_URL: string = "http://localhost:9000/api";

export const endpoints = {
  login: "/login",
  logout: "/logout",
  me: "/me",
  users: "/users",
  products: "/products",
  orders: "/orders",
  categories: "/categories",
  cartItems: "/cart-items",
  checkout: "/checkout",
  laptopDetails: "/laptop-details",
} as const;

export type EndpointKey = keyof typeof endpoints;
