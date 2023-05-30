import React, { useState } from 'react';


const Product = () => {
    const [addedToCart, setAddedToCart] =useState(false);
  
    const handleAddToCart = () => {
      setAddedToCart(true);
    };
  
    const handleRemoveFromCart = () => {
      setAddedToCart(false);
    };
  
    return (
      <div>
        {/* <h2>Product Title</h2>
        <p>Product Description</p> */}
        {addedToCart ? (
          <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
      </div>
    );
  };
  
  export default Product;
  