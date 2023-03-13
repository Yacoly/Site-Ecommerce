import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";

const ItemsCard2 = (props) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const SuccessMessage = () => {
    setTimeout(() => {
      Swal.fire({
        title: "Ajouté avec succès",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "crimson",
        AnnuléeButtonColor: "#d33",
        confirmButtonText: "Acheter maintenant",
        cancelButtonText: "Continuer mes achats 🛍",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/mon-panier");
        }
      });
    }, 200);
  };

  return (
    <div className="col-md-2 col-lg-3 mb-3">
      <div class="card">
        <img src={props.img} class="card-img-top image-produit" alt="" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <h5 class="card-text">{props.price} FCFA</h5>
          <p class="card-text">{props.desc}</p>

          <button
            className="btn btn-success-shoping"
            onClick={() => {
              addItem(props.item);
              SuccessMessage();
            }}
          >
            Ajouter au Panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard2;
