import React, { useEffect, useState } from 'react';
import "./ListProducts.scss";
import ProductServices from '../../../../Services/ProductsServices';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { BiLeftArrow, BiPencil, BiRightArrow, BiTrash } from 'react-icons/bi';

const ListProducts = () => {
    const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);


const changePage = (newPage) => {
  if (pageNumber === 1 && newPage === -1) {
    return;
  } else if (pageNumber === 1 && newPage === 1) {
    setPageNumber(2);
  } else {
    setPageNumber((prev) => prev + newPage);
  }
};




    const getAllProducts = async () => {
        try {
            const response = await ProductServices.getAllProducts(pageNumber, 15);
            setProducts(response.products);
            console.log("response", response);
        } catch (error) {
            console.log("error", error)
        }
  }
  
 const deleteProductById = async (id) => {
    try {
      const response = await ProductServices.deleteProduct(id);
      console.log("response", response);
      const response2 = await ProductServices.getAllProducts(pageNumber, 15);
      setProducts(response2.products);
      alert("Produit supprimé avec succès");
    } catch (error) {
      console.log("error", error);
    }
  }

    useEffect(() => {
        getAllProducts();
    }, [pageNumber]);
  
  useEffect(() => {
    console.log("products",products)
  },[products])

    useEffect(() => {
        console.log("pageNumber", pageNumber);
    },[pageNumber])

  return (
      <div className='list_products'>
      <>
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
                          <th>No</th>
                          <th>Image</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Categorie</th>
              <th>Prix initial</th>
              <th>Prix promo</th>
              <th>Quantité</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table_body">
            {products && products.map((product, idx) => (
                <tr key={product._id}>
                    <td>{idx + 1}</td>
                    <td><div className='product_image'><img src={product?.image} /></div></td>
                <td>{product.title}</td>
                <td>{product.desc}</td>
                <td>{product.category}</td>
                <td>{product.initialPrice}</td>
                <td>{product.discountedPrice}</td>
                <td>{product.quantity}</td>
                <td>{product.status}</td>
                <td>
                  <div className='actions-btn'>
                    <Link to={`/adminfhc/editproduct/${product._id}`}>
                      <div className="edit"><BiPencil/> Edit</div>
                    </Link>
                    <div className="delete" onClick={()=> deleteProductById(product._id)}><BiTrash/> Delete</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
      </>

      {/* paginations */}
      <div className='pagination'>

        <div className="prev" onClick={()=>changePage(-1)}>
          <BiLeftArrow color='#fff' size={15}/>  Précédent 
        </div>

        <div className="next" onClick={()=> changePage(1)}>
          Next <BiRightArrow color='#fff' size={15}/>
        </div>
        
      </div>
    

    </div>
  )
}

export default ListProducts