import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Header from './Header/Header';
import FoodCard from './foodcard/Foodcard';

import './App.css';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCart = () => {
    setCartCount(cartCount - 1);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Header />
      <div className="food-cards-container">
        <FoodCard
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Food 1"
          rating="4.5"
          price="9.99"
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <FoodCard
          sale="sale"
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Food 2"
          rating="3.7"
          price="7.99"
          addToCart={addToCart}
        />
        <FoodCard
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Food 3"
          rating="4.2"
          price="6.99"
          addToCart={addToCart}
        />
        <FoodCard
          imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          name="Food 3"
          rating="4.2"
          price="6.99"
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default App;
