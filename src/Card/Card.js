import React from 'react';
import './Card.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodCard = ({ sale,imgSrc, name, rating, price, addToCart }) => {
  
  
  return (
    <div className="Shoping">
       <div className='Shoping__item'>
       <div className='sales-icon'>{sale}</div>
        <div className='Shoping__item__image'>
          <img src={imgSrc} alt={name} />
        </div>  
        <hr />
        <div className='Shoping__item__text'>

          <h3 className="Card-name">{name}</h3>
          <div className="Card-rating">{rating}</div>
          <div className="Card-rating">{rating}</div>
          <div className="Card-rating">{rating}</div>
          <div className="Card-rating">{rating}</div>
          <div className="Card-rating">{rating}</div>
          <div className="Card-price">${price}</div>
        </div>
        <button onClick={addToCart} >Add to Cart</button>
        
        <ToastContainer />
      </div>  
    </div>
  );
};

export default FoodCard;
