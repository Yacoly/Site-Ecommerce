import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";

import phone from "../../../assets/images/phone.jpeg";
const Inscrire = () => {
  return (
    <>
      <Navbar />
      {/* <section class="background-img">
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="row gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 display-5 fw-bold ls-tight">
                <span>TENDANCE FASHION</span>
              </h1>
              <h2 class="mb-4 opacity-70">
                Des vêtements, des chaussures et des sacs pour femmes fondés sur la forme, construits sur le service
                etaxés sur le style. Quelle que soit que soit votre taille,<span>TENDANCE FASHION</span> vous convient.”
              </h2>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
              <div class="card bg-glass">
                <div class="card-body px-4 py-5 px-md-5">
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1" class="form-control" />
                          <label class="form-label" for="form3Example1">
                            Prénom
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example2" class="form-control" />
                          <label class="form-label" for="form3Example2">
                            Nom de famille
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3" class="form-control" />
                      <label class="form-label" for="form3Example3">
                        Adresse e-mail
                      </label>
                    </div>
                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4" class="form-control" />
                      <label class="form-label" for="form3Example4">
                        Mot de passe
                      </label>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-4">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label class="form-check-label" for="form2Example33">
                        Abonnez-vous à notre newsletter
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mb-4">
                      S'inscrire
                    </button>
                    <div class="text-center">
                      <p>ou inscrivez-vous avec :</p>
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                      </button>
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                      </button>
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={phone} alt="La maison jungle" className="lmj-logo" />
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

                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <label class="form-label" for="form3Example1">
                                Prénom
                              </label>
                              <input type="text" id="form3Example1" class="form-control" />
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <label class="form-label" for="form3Example2">
                                Nom de famille
                              </label>
                              <input type="text" id="form3Example2" class="form-control" />
                            </div>
                          </div>
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example3">
                            Adresse e-mail
                          </label>
                          <input type="email" id="form3Example3" class="form-control" />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example4">
                            Mot de passe
                          </label>
                          <input type="password" id="form3Example4" class="form-control" />
                        </div>
                        <div class="phrase">
                          <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                          <label class="form-check-label" for="form2Example33">
                            Abonnez-vous à notre newsletter
                          </label>
                        </div>
                        <div className="bton-connexion">
                          <button type="submit" class="btn btn-primary btn-block mb-4">
                            S'inscrire
                          </button>
                        </div>

                        <div class="text-center">
                          <p>ou inscrivez-vous avec :</p>
                          <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-facebook-f"></i>
                          </button>
                          <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-google"></i>
                          </button>
                          <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-twitter"></i>
                          </button>
                          <button type="button" class="btn btn-link btn-floating mx-1">
                            <i class="fab fa-github"></i>
                          </button>
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

export default Inscrire;
