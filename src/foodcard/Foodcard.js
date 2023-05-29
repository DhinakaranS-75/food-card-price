import React from 'react';
import './FoodCard.css';

const FoodCard = ({ sale,imgSrc, name, i, price, addToCart }) => {
  return (
    <div className="Shoping">
       <div className='Shoping__item'>
       <div className='sales-icon'>{sale}</div>
        <div className='Shoping__item__image'>
          <img src={imgSrc} alt={name} className="food-img" />
        </div>  
        <hr />
        <div className='Shoping__item__text'>

          <h3 className="food-name">{name}</h3>
          <div className="food-rating">{<i class="fa fa-star" aria-hidden="true"></i>}</div>
          <div className="food-price">${price}</div>

          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>  
    </div>


        // <div className="food-card">
        //   <img src={imgSrc} alt={name} className="food-img" />
        //   <div className="food-details">
        //     <h3 className="food-name">{name}</h3>
        //     <div className="food-rating">Rating: {rating}</div>
        //     <div className="food-price">${price}</div>
        //     <button onClick={addToCart}>Add to Cart</button>
        //   </div>
        // </div>
  );
};

export default FoodCard;
