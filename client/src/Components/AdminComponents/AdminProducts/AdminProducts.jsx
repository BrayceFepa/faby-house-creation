import React, { useState } from "react";
import "./AdminProducts.scss";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const initialFormState = {
    title: "",
    desc: "",
    image: "",
    category: "Choisir une Catégoire",
    color: "",
    size: "",
    initialPrice: "",
    discountedPrice: "",
    quantity: "",
    status: "show",
    sku: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const requiredFields = [
      "title",
      "desc",
      "image",
      "category",
      "initialPrice",
      "discountedPrice",
      "quantity",
    ];
    const isFormValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }

    // Log the form data
    console.log(formData);

    // You can perform further actions like sending the data to the server here
  };

  return (
    <div className="admin_product">
      <div className="nav_produts">
        <h3>Produits</h3>
        <div className="options_btn">
          <Link to={`/adminfhc/listproducts`}> <div className="btn">Tous les produits</div></Link>
          <Link to={`/adminfhc/products`}><div className="btn">Créer</div></Link>
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
            value={formData.image}
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

export default AdminProducts;
