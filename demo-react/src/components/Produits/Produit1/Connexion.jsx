import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";
import white from "../../../assets/images/white.jpeg";
const Connexion = () => {
  return (
    <>
      <Navbar />
      <section>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={white} alt="La maison jungle" className="lmj-logo" />
                    {/* src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/bags"
                      alt="login form"
                      class="img-fluid" */}
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="buton-title">
                          <span class="h1 fw-bold mb-0">TENDANCE FASHION</span>
                        </div>

                        <h5 class="fw-normal mb-3 pb-3">Connectez-vous à votre compte</h5>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example17">
                            Adresse e-mail
                          </label>
                          <input type="email" id="form2Example17" class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example27">
                            Mot de passe
                          </label>
                          <input type="password" id="form2Example27" class="form-control form-control-lg" />
                        </div>
                        <div className="oublie">
                          <a class="small text-muted" href="#!">
                            Mot de passe oublié?
                          </a>
                        </div>

                        <div class="pt-1 mb-4">
                          <button class="btn btn-dark btn-lg btn-block" type="button">
                            Connexion
                          </button>
                        </div>

                        <div className="page-i">
                          <div className="vous">
                            <p class="mb-5 pb-lg-2">Vous n'avez pas de compte ?</p>
                          </div>
                          <div className="link">
                            <NavLink className="connect" to="Inscrire">
                              Inscrivez-vous ici
                            </NavLink>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Connexion;
