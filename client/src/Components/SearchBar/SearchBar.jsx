import React, { useRef, useState } from 'react';
import "./SearchBar.scss";
import ProductServices from '../../Services/ProductsServices';
import { Link } from 'react-router-dom';

const SearchBar = ({searching,setSearching}) => {

    const inputRef = useRef()

    const [productData, setProductData] = useState([]);
    
    const searchProductsByTitle = async (title) => {
        setSearching(true);
        try {
            const queryParams = {
                title,
                page: 1,
                limit: 5
            }
            const queryString = new URLSearchParams(queryParams).toString()
            const response = await ProductServices.searchProductByTitle(queryString);
            setProductData(response?.products);
            console.log("searchresult",response);
        } catch (error) {
            console.log("searcherror", error)
        }
    }

    const goToResult = () => {
        setSearching(false);
        inputRef.current.value = "";
    }



  return (
      <div className='searchbar_container'>
          <div className='search-area'>
              <input type='text' placeholder='Rechercher un article ici...' onChange={(e)=>searchProductsByTitle(e.target.value)} ref={inputRef} />
          </div>

          <div className="search-results">
              {
                  (searching && productData.length > 0) && <>
                      {productData.map((data) => {
                          return (
                              <Link to={`/product/${data?._id}`} onClick={()=>goToResult()}>
                                 <div className='results-container'>
                                  <div className='product-pic'>
                                     <img src={data?.image} alt="product-pic" />
                                  </div>
                                  <div className='product-info'>
                                     
                                      <span>
                                          {
                                              data?.title
                                          }
                                      </span>
                                      
                                  </div>
                                  <div className='prices'>
                                          <span>
                                              {
                                                  data?.initialPrice
                                              }
                                          </span>
                                          <span>
                                          {data?.discountedPrice} CFA
                                          </span>
                                          
                                       </div>
                          </div>
                              </Link>
                      )
                  })}
                  </>
              }
          </div>
          
    </div>
  )
}

export default SearchBar