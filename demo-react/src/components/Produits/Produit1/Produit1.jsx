import React from "react";
import { NavLink } from "react-router-dom";
import Itemscard from "../../Collection/ItemsCard";
import Data from "../../Collection/Data";
const Produit1 = () => {
  return (
    <div className="container">
      <div className="row">
        {Data.productData.slice(0, 20).map((item, index) => {
          return (
            <Itemscard img={item.img} title={item.title} desc={item.desc} price={item.price} key={index} item={item} />
          );
        })}
        <div className="btn-container">
          <NavLink className="primair" to="/collection/vetements">
            VOIR PLUS DE VETEMENTS <i class="fa-solid fa-angles-right"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Produit1;
