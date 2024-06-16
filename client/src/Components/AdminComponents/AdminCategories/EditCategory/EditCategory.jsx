import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductServices from "../../../../Services/ProductsServices";
import CategorieServices from "../../../../Services/CategorieServices";
import "./EditProduct.scss"
import Swal from "sweetalert2";

const EditCategory = () => {
  const { categoryId } = useParams(); // Extract the product ID from the URL
  const [formData, setFormData] = useState({
    title: "",
    status: "Show",
  });

  // Fetch product details based on the product ID when the component mounts
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
          const product = await CategorieServices.getCategoryById(categoryId);
          console.log("responseCategory", product)
        setFormData((prev)=>({...prev, title: product.title, icon:""}));
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [categoryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call your API service to update the product
      await CategorieServices.updateCategory(categoryId, formData);
      console.log("Product updated successfully:", formData);
      Swal.fire({
        title: "Success",
        icon: "success",	
      })
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
          <Link to={`/adminfhc/listcategories`}> <div className="btn">Toutes les categories</div></Link>
          <Link to={`/adminfhc/categories`}><div className="btn">Créer</div></Link>
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
       
        
        
        
       
        <div className="form_control">
       
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="Status"
          >
            <option>Choisir un status</option>
            {[{title:"Afficher", value: "Show"},{title:"Cacher", value: "Hide"},].map(status => <option value={status.value} key={status.value}>{status.title}</option>)}
          </select>
        </div>
        
        
        
        
        
       
        

        <button className="btn submit-btn" type="submit">Enregistrer</button>
      </form>
      {/* Add your content related to products here */}
    </div>
  );
};

export default EditCategory;
