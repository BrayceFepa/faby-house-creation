import React, { useEffect, useState } from "react";
import "./AdminCategories.scss";
import { Link } from "react-router-dom";
import ProductServices from "../../../Services/ProductsServices";
import { Circles } from "react-loader-spinner";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../redux/reducers/categoriesReducer";


const AdminCategories = () => {
  
  const initialFormState = {
    title: "",
    icon: "",
    status: "Show",
  };

    const categories = useSelector(selectCategories);
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);

    // Check if all required fields are filled
    const requiredFields = [
      "title",
    ];
    const isFormValid = requiredFields.every(
      (field) => formData[field] !== ""
    );

    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }
    // const fileData = new FormData();
    //     fileData.append("file", formData.icon);
    //     fileData.append("upload_preset", "qerwryzv");

    //     const response = await fetch(
    //       `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`,
    //       {
    //         method: "POST",
    //         body: fileData,
    //       }
    // );
    // console.log("cloudinaryResp", response);
    
    // if (response.ok) {
      // const data = await response.json();
          // Handle the uploaded image data
          // console.log("cloudinary pic resp", data);
      const creteProductResponse = await ProductServices.createProduct({ ...formData });
      console.log("creteProductResponse", creteProductResponse);
      Swal.fire({
        title: "Product created successfully",
        icon:"success",
      })
    // }

    // Log the form data
      console.log(formData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    // You can perform further actions like sending the data to the server here
  };

  useEffect(() => {
    console.log("categories",categories)
  },[categories])

  return (
    <div className="admin_product">
      <div className="nav_produts">
        <h3>Categories</h3>
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
        
       
        
        
        
     
        
        

        <button className="btn submit-btn" type="submit">Enregistrer {loading && <Circles height="15"
  width="15"
  color="#ffa600"
  ariaLabel="circles-loading"
  wrapperClass=""
  visible={loading}/>}</button>
      </form>
      {/* Add your content related to products here */}
    </div>
  );
}

export default AdminCategories;