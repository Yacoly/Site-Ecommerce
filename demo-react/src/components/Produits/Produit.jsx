import React from "react";
import { NavLink } from "react-router-dom";
import ItemsCard2 from "../Collection/ItemsCard2";
import Data2 from "../Collection/DataProduit";

const Produit = () => {
  return (
    <div className="container">
      <div className="row">
        {Data2.productData.slice(0, 20).map((item, index) => {
          return (
            <ItemsCard2 img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
          );
        })}
        <div className="btn-container">
          <NavLink className="primair" to="/collection/Sacs et Chaussure">
            VOIR PLUS DE SACS ET CHAUSSURES <i class="fa-solid fa-angles-right"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Produit;
