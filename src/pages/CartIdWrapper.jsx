import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from '../assets/data.json';
import CartId from "../components/CartId";

const CartIdWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedCart = data.find(cart => cart.id === id);

  useEffect(() => {
    if (!selectedCart) {
      navigate("/error");
    }
  }, [selectedCart, navigate]);

  if (!selectedCart) {
    return null; 
  }


  return (
    <div>
      <CartId selectedCart={selectedCart} />
    </div>
  );
}

export default CartIdWrapper;