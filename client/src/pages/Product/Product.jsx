import React, { useEffect, useState, useContext } from "react";
import "./Product.scss";
import images from "../../Constants/Images";
import { BsCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/reducers/productsReducer";
import { useParams } from 'react-router-dom';
import CartContext from '../../Context/Cart/CartContext';


const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const products = useSelector(selectProducts);
  const { id } = useParams();
    const { addToCart } = useContext(CartContext);


  const [product, setProduct] = useState({});

useEffect(() => {
  // Find the product with the matching id and set it to the state
  const foundProduct = products?.products?.find((elt) => elt?._id === id);
  setProduct(foundProduct);
}, [id, products]);

  
  const handleQty = (nbr) => {
      setQuantity((prev) => {
        if (prev === 1 && nbr === -1) {
          return 1
        }
        return prev + nbr
      })
   setProduct({...product, customQty: quantity + nbr})
  }




  return (
    <div className="product">
      <div className="left">
        <div className="image">
          <img src={product?.image} alt="" />
        </div>
      </div>

      <div className="right">

        <h2>{product?.title}</h2>
        <span className="price">{product?.discountedPrice}</span>
        <p className="description">
         {product?.desc}
        </p>

        <div className="quantity">
          <button
            onClick={() => handleQty(-1)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => handleQty(1)}>+</button>
        </div>

        <div className="add-to-cart" onClick={()=>addToCart(product)}>
          <button className="btn">
            <BsCartCheckFill/> AJOUTER AU PANIER
          </button>
        </div>

        <ul className="info">
          <li>Categorie: { product?.category}</li>
          <li>Nom : {product?.title}</li>
          <li>Couleur : {product?.color}</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
