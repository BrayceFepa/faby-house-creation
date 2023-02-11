import React from 'react';
import "./CategoriesBar.scss";
import { Link } from 'react-router-dom';

const CategoriesBar = () => {

     const categories = [
        {
            id: 1,
            title: "foulard nigerian"
        },
        {
            id: 2,
            title: "crinolline"
        },
        {
            id: 3,
            title: "paille française"
        },
       
    ];

  return (
      <div className='categories-bar'>
          {
              categories.map(category => (<a href={`#${category.title}`} className='category'><span>{category.title}</span></a>))
         } 
    </div>
  );
}

export default CategoriesBar;