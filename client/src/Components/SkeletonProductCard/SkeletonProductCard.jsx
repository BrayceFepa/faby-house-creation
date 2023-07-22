import React from 'react';
import "./SkeletonProductCard.scss"

const SkeletonProductCard = () => {
  return (
      <div className='card'>
           <div className="card__image"></div>
    <div className="card__content">
      <h2 className='loading-title'></h2>
      <p className='loading-txt'></p>
    </div>
    </div>
  )
}

export default SkeletonProductCard