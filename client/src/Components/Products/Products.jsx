import React, { useEffect } from "react";

import "./Products.scss";
import images from "../../Constants/Images";
import ProductCard from "../ProductCard/ProductCard";

import { useDispatch, useSelector } from "react-redux";
import {  selectProducts } from "../../redux/reducers/productsReducer";
import { selectCategories } from "../../redux/reducers/categoriesReducer";

const Products = () => {


  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const loading = useSelector((state) => state.products.loading);



  useEffect(() => {
    if (products) {
      console.log("products", products);
    }
  }, [products])
  useEffect(() => {
    if (categories) {
      console.log("categoriesrdx", categories)
    }
  
    return () => {
      
    }
  }, [categories])
  

  return (
    <div className="products">
      <h2 className="heading">
        nos <span>produits</span>
      </h2>

      {/* <div className="categories">
        {categories.map((category) => (
          <Category name={category.title} key={category.id} />
        ))}
      </div> */}

      <div className="products-wrapper">
        {categories.map((category) => (
          <div className="category" id={category?.title}  key={category._id}>
            <h2 className="heading">
              {category?.title}
            </h2>

            <div className="products-list">
              {products?.products.map(
                (product) =>
                  product?.category === category?.title && (
                    <ProductCard key={product?._id} product={product} />
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
