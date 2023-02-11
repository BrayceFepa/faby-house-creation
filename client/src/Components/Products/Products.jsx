import React from "react";
import Category from "../Categories/Category";

import "./Products.scss";
import images from "../../Constants/Images";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const data = [
    {
      id: 1,
      img: images.pailleFr,
      title: "paille française",
      price: "10000",
      isNew: true,
      discountedPrice: 8000,
      category: "foulard nigerian",
    },
    {
      id: 2,
      img: images.crinoline1,
      title: "crinoline rose",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "foulard nigerian",
    },
    {
      id: 3,
      img: images.crinoline2,
      title: "crinoline noire",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "foulard nigerian",
    },
    {
      id: 4,
      img: images.capNigerien,
      title: "foulard nigérien",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "foulard nigerian",
    },
    {
      id: 5,
      img: images.pailleFr,
      title: "paille française",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "paille française",
    },
    {
      id: 6,
      img: images.crinoline1,
      title: "crinoline rose",
      price: "10000",
      isNew: true,
      discountedPrice: 8000,
      category: "paille française",
    },
    {
      id: 7,
      img: images.crinoline2,
      title: "crinoline noire",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "paille française",
    },
    {
      id: 8,
      img: images.capNigerien,
      title: "foulard nigérien",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "paille française",
    },
    {
      id: 9,
      img: images.pailleFr,
      title: "paille française",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "crinolline",
    },
    {
      id: 10,
      img: images.crinoline1,
      title: "crinoline rose",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "crinolline",
    },
    {
      id: 11,
      img: images.crinoline2,
      title: "crinoline noire",
      price: "10000",
      isNew: true,
      discountedPrice: 8000,
      category: "crinolline",
    },
    {
      id: 12,
      img: images.capNigerien,
      title: "foulard nigérien",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "crinolline",
    },{
      id: 13,
      img: images.pailleFr,
      title: "paille française",
      price: "10000",
      isNew: true,
      discountedPrice: 8000,
      category: "foulard nigerian",
    },
    {
      id: 14,
      img: images.crinoline1,
      title: "crinoline rose",
      price: "10000",
      isNew: true,
      discountedPrice: 8000,
      category: "foulard nigerian",
    },
    {
      id: 15,
      img: images.crinoline2,
      title: "crinoline noire",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "foulard nigerian",
    },
    {
      id: 16,
      img: images.capNigerien,
      title: "foulard nigérien",
      price: "10000",
      isNew: true,
      discountedPrice: 8000,
      category: "foulard nigerian",
    },
    {
      id: 17,
      img: images.pailleFr,
      title: "paille française",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "paille française",
    },
    {
      id: 18,
      img: images.crinoline1,
      title: "crinoline rose",
      price: "10000",
      isNew: true,
      discountedPrice: 8000,
      category: "paille française",
    },
    {
      id: 19,
      img: images.crinoline2,
      title: "crinoline noire",
      price: "10000",
      isNew: true,
      discountedPrice: 8000,
      category: "paille française",
    },
    {
      id: 20,
      img: images.capNigerien,
      title: "foulard nigérien",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "paille française",
    },
    {
      id: 21,
      img: images.pailleFr,
      title: "paille française",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "crinolline",
    },
    {
      id: 22,
      img: images.crinoline1,
      title: "crinoline rose",
      price: "10000",
      isNew: true,
      discountedPrice: 8000,
      category: "crinolline",
    },
    {
      id: 23,
      img: images.crinoline2,
      title: "crinoline noire",
      price: "10000",
      isNew: true,
      discountedPrice: 8000,
      category: "crinolline",
    },
    {
      id: 24,
      img: images.capNigerien,
      title: "foulard nigérien",
      price: "10000",
      isNew: false,
      discountedPrice: 8000,
      category: "crinolline",
    },
  ];

  const categories = [
    {
      id: 1,
      title: "foulard nigerian",
    },
    {
      id: 2,
      title: "crinolline",
    },
    {
      id: 3,
      title: "paille française",
    },
  ];

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
          <div className="category" id={category.title}  key={category.id}>
            <h2 className="heading">
              {category.title}
            </h2>

            <div className="products-list">
              {data.map(
                (product) =>
                  product.category === category.title && (
                    <ProductCard key={product.id} {...product} />
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
