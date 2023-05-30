import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import FoodCard from './Card/Card';

import './App.css';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    toast.success('Added To Cart');
  };
  
  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Header />
      <div className="food-cards-container">
        <FoodCard
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Fancy Product"
          price="40.00 - $80.00"
          addToCart={addToCart}
        />
        <FoodCard
          sale="sale"
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Special Item"
          rating={<i class="fa fa-star" aria-hidden="true"></i>}
          price="20.00 $18.00"
          addToCart={addToCart}
        />
        <FoodCard
          sale="sale"
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Sale Item"
          price="50.00 $25.00"
          addToCart={addToCart}
        />
        <FoodCard
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Popular Item"
          rating={<i class="fa fa-star" aria-hidden="true"></i>}
          price="40.00"
          addToCart={addToCart}
        />
        <FoodCard
          sale="sale"
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Sale Item"
          price="50.00 $25.00"
          addToCart={addToCart}
        />
        <FoodCard
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Fancy Product"
          price="120.00 - $280.00"
          addToCart={addToCart}
        />
        <FoodCard
          sale="sale"
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Special Item"
          rating={<i class="fa fa-star" aria-hidden="true"></i>}
          price="20.00 $18.00"
          addToCart={addToCart}
        />
        <FoodCard
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Popular Item"
          rating={<i class="fa fa-star" aria-hidden="true"></i>}
          price="40.00"
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default App;
