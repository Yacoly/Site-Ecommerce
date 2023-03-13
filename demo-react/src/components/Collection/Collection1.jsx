import React from "react";
import Itemscard from "./ItemsCard";
import Data from "../Collection/Data";
import Navbar from "../Navbar/Navbar";
import Footer from "../Produits/Footer/Footer";

const Collection1 = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <h3 className="title-co">TOUTE LA COLLECTION</h3>
        <div className="button-v">
          <boutton className="title-hab">VETEMENTS</boutton>
        </div>
        <div className="row">
          {Data.productData.map((item, index) => {
            return (
              <Itemscard
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
