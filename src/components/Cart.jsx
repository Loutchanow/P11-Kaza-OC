import React from 'react';
import '../styles/cart/cart.scss'
import data from '../assets/data.json';
import { Link, Route, Routes  } from 'react-router-dom'


const DetailPage = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      {/* Add more details or components for the detail page */}
    </div>
  );
};
const Cart = () => {
  return (
    <div className='cartContainer'>
      <div className="carts">
          <Routes>
            {data.map((item) => (
              <Route key={item.id} path={"/" + item.title} element={<DetailPage item={item} />} />
            ))}
          </Routes>

          {data.map((item) => (
            <Link key={item.id} to={"/" + item.title}>
              <div className="cart">
                <img src={item.cover} alt="cover" className='cartImage' />
                <h2>{item.title}</h2>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Cart;