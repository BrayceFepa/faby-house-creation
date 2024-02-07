import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductServices from "../../../../Services/ProductsServices";
import "./EditProduct.scss"

const EditProduct = () => {
  const { productId } = useParams(); // Extract the product ID from the URL
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: "",
    category: "",
    color: "",
    size: "",
    initialPrice: "",
    discountedPrice: "",
    quantity: "",
    status: "show",
    sku: "",
  });

  // Fetch product details based on the product ID when the component mounts
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
          const product = await ProductServices.getProductById(productId);
          console.log("responseProduct", product)
        setFormData(product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call your API service to update the product
      await ProductServices.updateProduct(productId, formData);
      console.log("Product updated successfully:", formData);
    } catch (error) {
      console.error("Error updating product:", error);
    }
    };
    

    useEffect(() => {
        console.log("formData",formData)
    },[formData])

  return (
    <div className="admin_product">
      <div className="nav_produts">
        <h3>Produits</h3>
        <div className="options_btn">
          <Link to={`/adminfhc/listproducts`}> <div className="btn">Tous les produits</div></Link>
          <Link to={`/adminfhc/products`}><div className="btn">Créer un produit</div></Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="products_form">
        {/* Render your form fields here */}
        <div className="form_control">
          
            <input
              type="text"
              name="title"
              value={formData.title}
            onChange={handleChange}
            placeholder="Nom du produit"
            />
        
        </div>
        <div className="text_control">
        
          <textarea name="desc" value={formData.desc} onChange={handleChange} placeholder="Description" />
        
        </div>
        
        <div className="form_control">
        
          <input
            type="file"
            name="image"
            onChange={handleChange}
            placeholder="Image"
          />
        
        </div>
        
        <div className="form_control">
       
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Categorie"
          >
            <option>Choisir une catégorie</option>
            <option value="Categ2">Categ 2</option>
            <option value="Categ3">Categ 3</option>
          </select>
         
        </div>
        
        <div className="form_control">
        
          <input
            type="number"
            name="size"
            value={formData.size}
            onChange={handleChange}
            placeholder="taille"
          />
         
        </div>
        
        <div className="form_control">
       
          <input
            type="number"
            name="initialPrice"
            value={formData.initialPrice}
            onChange={handleChange}
            placeholder="Prix Initial"
          />
         
        </div>
        
        <div className="form_control">
       
          <input
            type="number"
            name="discountedPrice"
            value={formData.discountedPrice}
            onChange={handleChange}
            placeholder="Prix promo"
          />
        
        </div>
        
        <div className="form_control">
        
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantité"
          />
          
          </div>

        <button className="btn submit-btn" type="submit">Enregistrer</button>
      </form>
      {/* Add your content related to products here */}
    </div>
  );
};

export default EditProduct;
