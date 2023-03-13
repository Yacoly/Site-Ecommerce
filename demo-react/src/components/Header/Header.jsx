import React from "react";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import Produit1 from "../Produits/Produit1/Produit1";

const Header = () => {
  return (
    <header className="App-header">
      <Navbar />
      <Carousel />
      <Produit1 />
    </header>
  );
};

export default Header;
