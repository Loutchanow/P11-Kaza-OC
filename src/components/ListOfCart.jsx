import React from 'react';
import '../styles/listofcart/listofcart.scss'
import data from '../assets/data.json';
import { useNavigate } from "react-router-dom";


const ListOfCart = () => {
  const navigate = useNavigate();
  return (
    <div className='cartContainer'>
      <div className="carts">
            {data.map((item) => {
              return (
            <div key={item.id} className="cart" onClick={() => {navigate(`/${item.id}`)}}>
              <img src={item.cover} alt="cover" className='cartImage' />
              <h2>{item.title}</h2>
            </div>
            )
            })}
      </div>
    </div>
  );
};
export default ListOfCart;