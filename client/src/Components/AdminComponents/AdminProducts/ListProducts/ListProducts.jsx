import React, { useEffect, useState } from 'react';
import "./ListProducts.scss";
import ProductServices from '../../../../Services/ProductsServices';
import { Link } from 'react-router-dom';

const ListProducts = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const response = await ProductServices.getAllProducts();
            console.log("response", response);
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        getAllProducts();
    },[])

  return (
      <div className='list_products'>
          <div className="nav_produts">
        <h3>Tous les Produits</h3>
        <div className="options_btn">
         <Link to={`/adminfhc/listproducts`}> <div className="btn">Tous les produits</div></Link>
          <Link to={`/adminfhc/products`}><div className="btn">Créer</div></Link>
        </div>
          </div>
          
          <div className='table_products'>
              <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Initial Price</th>
              <th>Discounted Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {products.map(product => (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>{product.desc}</td>
                <td>{product.category}</td>
                <td>{product.initialPrice}</td>
                <td>{product.discountedPrice}</td>
                <td>{product.quantity}</td>
                <td>{product.status}</td>
                <td>Edit / Delete</td>
              </tr>
            ))} */}
          </tbody>
        </table>
          </div>
    </div>
  )
}

export default ListProducts