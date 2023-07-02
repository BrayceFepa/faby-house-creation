import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../redux/reducers/productsReducer';
import { fetchCategories, fetchCategoryById } from '../../redux/reducers/categoriesReducer';


const FetchDataLayout = ({ children }) => {
    const dispatch = useDispatch();
    
      useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories())
  }, [dispatch]);
  return (
    <div>
        {children}
    </div>
  )
}

export default FetchDataLayout