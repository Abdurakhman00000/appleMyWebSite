import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import ProductContext from "./context/ProductContext";
import AuthContext from "./context/AuthContext";
import CartContext from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AuthContext>
  <ProductContext>
    <CartContext>
    <App />
    <MainRoutes />
    </CartContext>
    </ProductContext>
  </AuthContext>
  </BrowserRouter>
);
