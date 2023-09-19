import React, { useEffect, useState, useContext } from "react";
import "./Product.scss";
import images from "../../Constants/Images";
import { BsCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/reducers/productsReducer";
import { useParams } from 'react-router-dom';
import CartContext from '../../Context/Cart/CartContext';
import ProductServices from "../../Services/ProductsServices";
import SkeletonProductCard from "../../Components/SkeletonProductCard/SkeletonProductCard";


const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const products = useSelector(selectProducts);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false)


  const [product, setProduct] = useState({});

  const findProductById = async (id) => {
    try {
      setLoading(true)
      const response = await ProductServices.getProductById(id);
      console.log("productbyid", response)
      setProduct(response);
      setLoading(false);
    } catch (error) {
      console.log("errprdcbyid", error)
      setLoading(false);
    }
  }

useEffect(() => {
  // Find the product with the matching id and set it to the state
  const foundProduct = products?.products?.find((elt) => elt?._id === id);
  if (foundProduct) {
    setProduct(foundProduct);    
  } else {
    findProductById(id)
  }
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
    <div>
      <div className="product">
      {
        loading ? <SkeletonProductCard /> :
          <>
        <div className="left">
        <div className="image">
          <img src={product?.image} alt="" />
        </div>
      </div>

      <div className="right">

        <h2>{product?.title}</h2>
        <span className="price">{product?.discountedPrice} FCFA</span>
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
        </>
      }
    </div>
    </div>
  );
};

export default Product;
