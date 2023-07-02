import React, { useContext } from 'react';
import { BsCart3 } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartContext from '../../Context/Cart/CartContext';

import "./ProductCard.scss";

const ProductCard = ({product}) => {
  const { _id, image, title, initialPrice, discountedPrice, quantity, createdAt }= product;
  const { addToCart } = useContext(CartContext);
// Get the current date
const currentDate = new Date();

// Convert the product's createdAt value to a Date object
const productCreatedAt = new Date(createdAt);

// Calculate the difference in milliseconds between the current date and the product's createdAt date
const timeDifference = currentDate.getTime() - productCreatedAt.getTime();

// Calculate the difference in days
const daysDifference = timeDifference / (1000 * 3600 * 24);

// Check if the product is new (less than 3 days old)
const isNewProduct = daysDifference < 3;

  return (
      <div className='product-card'>
          {isNewProduct && <span className='new'>Nouveau</span>}
          {quantity > 0 ? <span className='qty'>{quantity} en stock</span> : <span className='out-of-stock'>out of stock</span>}
          <div className="product-pic">
              <Link to={`/product/${_id}`}>
                <img src={image} alt="" />
              </Link>
          </div>
          <span className="title">{title}</span>
          <div className="prices">
              <span >{initialPrice}</span>
          <span >{discountedPrice} FCFA</span>
          </div>
          <div className="buttons">
        <button type='button' className='btn' onClick={() => addToCart(product)}><BsCart3 size={'1.5em'} /> ajouter au pannier</button>
        <Link to={`/product/${_id}`}>
          <button type='button' className='view'><AiOutlineEye size={'1.5em'} /> </button>
        </Link>
          </div>
    </div>
  );
}

export default ProductCard;