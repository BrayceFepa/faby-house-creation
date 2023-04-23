import React, { useContext, useState } from 'react';
import "./Cart.scss";

import Images from '../../Constants/Images';
import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillTrashFill, BsWhatsapp } from "react-icons/bs";
import CartContext from '../../Context/Cart/CartContext';

const Cart = () => {
    
    const {showHideCart, cartItems, removeItem, handleQuantity} = useContext(CartContext);

    const data = [
    {
      id: 1,
      img: Images.pailleFr,
      title: "paille française",
      price: 10000,
      isNew: true,
      discountedPrice: 8000,
      category: "foulard nigerian",
    },
    {
      id: 2,
      img: Images.crinoline1,
      title: "crinoline noire",
      price: 10000,
      isNew: false,
      discountedPrice: 8000,
      category: "foulard nigerian",
    },
]

  return (
      <div className='cart'>
          <div className="close-cart" onClick={()=>showHideCart()}>
              <AiFillCloseCircle/>
          </div>
          <h4 className="title">products in your cart</h4>
          <div className="products">
              {cartItems?.map(item => (
                  <div className="item" key={item.id}>
                      <div className="pic">
                          <img src={item.img} alt="" />
                      </div>
                      <div className="details">
                          <span className='item_title'>{item.title}</span>
                          <div className="prices">
                              <span className='initial_price'>{item.price} FCFA</span>
                              <span className='discounted_price'>{item.discountedPrice} FCFA</span>
                          </div>
                          <div className="quantity">
                              <div onClick={()=>handleQuantity(item.id, -1)}><AiOutlineMinusCircle /></div>
                              <span>{item.quantity}</span>
                              <div onClick={()=>handleQuantity(item.id, 1)}><AiOutlinePlusCircle/></div>
                          </div>
                      </div>

                      <div className="trash" onClick={()=>removeItem(item)}>
                          <BsFillTrashFill/>
                      </div>
                  </div>
              ))}
          </div>
          
          <div className="checkout">
              <div className="whatsapp-btn">
                  <BsWhatsapp />
                  <span>commander sur whatsapp</span>
              </div>
              <div className="buy_now-btn">
                  <span>payer maintenant</span>
              </div>
          </div>

    </div>
  );
}

export default Cart;