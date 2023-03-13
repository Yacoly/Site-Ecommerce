import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="">
        <div className="réseau-footer">
          <div className=" cont">
            <h5>Contact</h5>
            <p>Téléphone : +221 779223150</p>
            <p>E-mail : fatouding.coly498@gmail.com</p>
            <p>Adresse : Niarry Tally</p>
            <div className="réseau">
              <div className=" twetter">
                <i class="fa-brands fa-twitter"></i>
              </div>

              <div className=" facebook">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className=" yutub">
                <i class="fa-brands fa-youtube"></i>
              </div>
              <div className=" insta">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className=" link">
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="lien">
            <h5>NOUVELLES RÉCENTES</h5>
            <p>À propos de nous</p>
            <p>Prestations de service</p>
            <p>Entrer en contact</p>
          </div>
          <div className="lien-conexion">
            <form class="connexion">
              <div class="col-auto">
                <input
                  class="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Entrez votre Email"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">
                  S'abonner
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
