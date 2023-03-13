import React from "react";
import { useCart } from "react-use-cart";
import Footer from "../Produits/Footer/Footer";
import Navbar from "./Navbar";

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } =
    useCart();

  return (
    <>
      <Navbar />
      <section className="py-4 container">
        {isEmpty ? (
          <h1 className="text-center">Le panier est vide</h1>
        ) : (
          <div className="row justify-content-center">
            <div className="col-12">
              <h5>
                Panier ({totalUniqueItems}) total Articles: ({totalItems})
              </h5>
              <br />
              <table className="table table-light table-hover m-0">
                <tbody>
                  <tr>
                    <td style={{ padding: "0px 100px 0px 10px" }}>
                      <b>Produit</b>
                    </td>
                    <td style={{ padding: "0px 100px 0px 10px" }}>
                      <b>Nom</b>
                    </td>
                    <td style={{ padding: "0px 50px 0px 0px" }}>
                      <b>Prix</b>
                    </td>
                    <td style={{ padding: "0px 50px 0px 0px" }}>
                      <b>Quantité</b>
                    </td>
                  </tr>
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img src={item.img} style={{ height: "6rem" }} alt="" />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td> {item.quantity}</td>
                        <td>
                          <button
                            style={{ border: "2px solid red" }}
                            className="btn btn-light ms-2"
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                          >
                            –
                          </button>
                          <button
                            style={{ border: "2px solid #fcba03" }}
                            className="btn btn-light ms-2"
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                          <button className="btn btn-dark ms-2" onClick={() => removeItem(item.id)}>
                            Retirer l'article
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <hr />
            <br />

            <div className="col-auto ms-auto">
              <h3>Prix ​​total : Rs. {cartTotal}</h3>
            </div>
            <div className="col-auto ms-auto">
              <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
                Vider le Panier
              </button>
              <button className="btn btn-primary m-2">Payez Maintenant</button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Cart;
