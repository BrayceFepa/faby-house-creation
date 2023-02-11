import React from 'react';

import "./Category.scss";

const Category = ({name}) => {
  return (
      <span className='btn category'>
          {name}
    </span>
  );
}

export default Category;