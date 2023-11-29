import React from 'react';
import '../styles/cart/cart.scss';
import data from '../assets/data.json';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="cartContainer">
      <div className="carts">
        {data.map((item) => {
          return (
            <div key={item.id} className="cart" onClick={() => navigate(`/${item.title}`)}>
              <img src={item.cover} alt="cover" className="cartImage" />
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
