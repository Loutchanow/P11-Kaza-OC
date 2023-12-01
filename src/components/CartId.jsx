import React from 'react';
import Caroussel from './Caroussel';
import Info from './Info';

const CartId = ({selectedCart}) => {
  return (
    <div className='wrapperInfo'>
      <Caroussel image={selectedCart}/>
      <Info info={selectedCart}/>
    </div>
  );
};

export default CartId;