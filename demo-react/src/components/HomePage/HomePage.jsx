import React from "react";
import Header from "../Header/Header";
import Produit from "../Produits/Produit";
import Footer from "../Produits/Footer/Footer";
const HomePage = () => {
  return (
    <div className="Home-page">
      <Header />
      <Produit />
      <Footer />
    </div>
  );
};

export default HomePage;
