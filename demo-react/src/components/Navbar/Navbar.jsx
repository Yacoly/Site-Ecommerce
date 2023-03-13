import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } =
    useCart();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light py-3
    shadow-sm"
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          TENDANCE FASHION
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="nav-item">
            <NavLink to="/" className="nav-link active" aria-current="page">
              Accueil
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink to="/nos-produits" className="nav-link active">
              Produits
            </NavLink>
          </div>
        </div>
        <div className="buttons">
          <NavLink to="/Connexion" className="btn btn-outline-dark ms-2">
            <i className="fa-solid fa-right-to-bracket"></i> Se Connecter
          </NavLink>
        </div>

        <div className="buttons">
          <NavLink to="/Inscrire" className="btn btn-outline-dark ms-2">
            <i className="fa-solid fa-user-plus"></i> S'inscrire
          </NavLink>
        </div>
        <div className="buttons">
          <NavLink to="/mon-panier" className="btn btn-outline-dark ms-2">
            <i className="fa-solid fa-cart-shopping"></i> Panier ({totalUniqueItems})
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
