import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, useLocation } from "react-router-dom";
import Produit1 from "./components/Produits/Produit1/Produit1";
import Collection1 from "./components/Collection/Collection1";
import Collection2 from "./components/Collection/Collection2";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Navbar/Cart";
import Connexion from "./components/Produits/Produit1/Connexion";
import Inscrire from "./components/Produits/Produit1/Inscrire";

function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, [location]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <div>Error</div>,
    },
    {
      path: "Produit1",
      element: <Produit1 />,
    },
    {
      path: "mon-panier",
      element: <Cart />,
    },

    {
      path: "collection/vetements",
      element: <Collection1 />,
    },
    {
      path: "collection/Sacs et Chaussure",
      element: <Collection2 />,
    },
    {
      path: "Connexion",
      element: <Connexion />,
    },
    {
      path: "Inscrire",
      element: <Inscrire />,
    },
  ]);

  return ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </React.StrictMode>
  );
}

export default App;
