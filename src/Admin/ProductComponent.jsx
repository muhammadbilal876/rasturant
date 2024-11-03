import React from 'react';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action/index';

const ProductComponent = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCart(product));
  };

  const removeFromCart = () => {
    dispatch(delCart(product));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
};

export default ProductComponent;
