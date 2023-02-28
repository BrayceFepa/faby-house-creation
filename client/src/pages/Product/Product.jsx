import React, { useState } from "react";
import "./Product.scss";
import images from "../../Constants/Images";
import { BsCartCheckFill } from "react-icons/bs";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="image">
          <img src={images.crinoline1} alt="" />
        </div>
      </div>

      <div className="right">

        <h2>Title</h2>
        <span className="price">10000 fcfa</span>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nemo facere earum aut cumque magnam quis quas laboriosam obcaecati dolorem eligendi tempora, quia sit eaque expedita est sapiente necessitatibus laborum.
        </p>

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <div className="add-to-cart">
          <button className="btn">
            <BsCartCheckFill/> AJOUTER AU PANIER
          </button>
        </div>

        <ul className="info">
          <li>Categorie: foulard nigérien</li>
          <li>Nom : Foulard</li>
          <li>Couleur : rouge</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
