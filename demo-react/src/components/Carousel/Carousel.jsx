import React from "react";
import { NavLink } from "react-router-dom";

import title from "../../assets/images/title.png";

const Carousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div class="col-6">
          <div className="text-left">
            <h5 className="para1">COLLECTIONS MODE ET TENDANCE </h5>
            <h1 className="title">
              Soyez belle👗,
              <br />
              soyez élégante
            </h1>

            <p className="paragraph">
              Une collection de mode tendance de classe mondiale.Connue pour <br />
              ses designs inspirés du soleil. Styles optiques pour femmes.
            </p>
          </div>
          <div className="button-e">
            <NavLink className="btn btn-outline-dark ms-3" to="mon-panier">
              Achetez <i class="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
        <div class="col-6">
          <div className="image-right">
            <img src={title} alt="image-h" className="image-accueil " />
          </div>
        </div>
      </div>
      <div className="title-prod">
        <h1>NOS PRODUITS</h1>
      </div>
    </div>
  );
};

export default Carousel;
