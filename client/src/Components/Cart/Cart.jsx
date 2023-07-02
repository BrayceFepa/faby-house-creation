import React, { useContext, useState } from 'react';
import "./Cart.scss";

import Images from '../../Constants/Images';
import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillTrashFill, BsWhatsapp } from "react-icons/bs";
import CartContext from '../../Context/Cart/CartContext';

const Cart = () => {
    
    const { showHideCart, cartItems, removeItem, handleQuantity } = useContext(CartContext); 
    
  return (
      <div className='cart'>
          <div className="close-cart" onClick={()=>showHideCart()}>
              <AiFillCloseCircle size={'2.5em'}/>
          </div>
          <h4 className="title">products in your cart ({cartItems?.length})</h4>
          <div className="products__cart">
              {cartItems?.length > 0 ? cartItems?.map(item => (
                  <div className="item" key={item._id}>
                      <div className="pic">
                          <img src={item?.image} alt="" />
                      </div>
                      <div className="details">
                          <span className='item_title'>{item?.title}</span>
                          <div className="prices">
                              <span className='initial_price'>{item?.initialPrice} FCFA</span>
                              <span className='discounted_price'>{item?.discountedPrice} FCFA</span>
                          </div>
                          <div className="quantity">
                              <div onClick={()=>handleQuantity(item._id, -1)}><AiOutlineMinusCircle size={'2em'} /></div>
                              <span>{item?.quantity}</span>
                              <div onClick={()=>handleQuantity(item._id, 1)}><AiOutlinePlusCircle size={'2em'}/></div>
                          </div>
                      </div>

                      <div className="trash" onClick={()=>removeItem(item)}>
                          <BsFillTrashFill size={'2em'}/>
                      </div>
                  </div>
              )) : <div style={{ textAlign: "center" }}>
              <span style={{ fontWeight: "bold", fontSize: "1.1rem", textAlign: "center" }}>Votre panier est vide pour le moment, cliquez sur le boutton "ajouter au panier" pour le remplir</span>
              </div>}
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