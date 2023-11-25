import React from "react";
import { useParams } from "react-router-dom";
import data from '../assets/data.json';


function CartId() {
  const { title } = useParams();
  const selectedCart = data.find(cart => cart.title === title)
  return (
    <div>
      <div>
        <h1>{selectedCart.title}</h1>
        <img src={selectedCart.cover} alt="cover" className='cartImage' />
        <p>{selectedCart.cover}</p>
      </div>
    </div>
  );
}

export default CartId;