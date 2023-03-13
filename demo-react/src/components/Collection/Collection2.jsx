import React from "react";
import Data2 from "./DataProduit";
import Navbar from "../Navbar/Navbar";
import Footer from "../Produits/Footer/Footer";
import ItemsCard from "./ItemsCard";

const Collection1 = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <h3 className="title-co">TOUTE LA COLLECTION</h3>
        <div className="button-v">
          <boutton className="title-hab">SACS ET CHAUSSURE</boutton>
        </div>
        <div className="row">
          {Data2.productData.map((item, index) => {
            return (
              <ItemsCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collection1;
