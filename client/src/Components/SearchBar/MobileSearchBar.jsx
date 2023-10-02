import React, { useRef, useState } from 'react';
import "./SearchBar.scss";
import ProductServices from '../../Services/ProductsServices';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { showSearch } from '../../redux/reducers/searchbarReducer';
import { useDispatch } from 'react-redux';

const MobileSearchBar = ({searching,setSearching}) => {

    const inputRef = useRef()

    const [productData, setProductData] = useState([]);
    const dispatch = useDispatch();
     const { isShowSearch } = useSelector((state) => state.searchBar);
    
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

    const onCloseSearch = () => {
        setSearching(false);
        inputRef.current.value = "";
        dispatch(showSearch());
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
              
             
          
          <div className={`icon2 `} onClick={()=> onCloseSearch()}>
                      
                           <AiFillCloseCircle  /> 
                  
              </div>
          
      </div>
      
      
  
  )
}

export default MobileSearchBar