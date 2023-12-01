import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from '../assets/data.json';
import CartId from "../components/CartId";

const CartIdWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedCart = data.find(cart => cart.id === id);

  useEffect(() => {
    // If selectedCart is undefined, redirect to the error component
    if (!selectedCart) {
      // You can customize the path or use a different method to navigate
      navigate("/error");
    }
  }, [selectedCart, navigate]);

  if (!selectedCart) {
    return null; // or loading state while redirecting
  }

  return (
    <div>
      <CartId selectedCart={selectedCart} />
    </div>
  );
}

export default CartIdWrapper;