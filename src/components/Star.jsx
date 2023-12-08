import React from 'react';

const Star = ({ rating }) => {
  const ratingInt = parseInt(rating, 10);

  let fullStars = [];
  let emptyStars = [];
  let restOfStars = 5 - ratingInt
  for (let i = 0; i < ratingInt; i++) {
    fullStars.push(<i key={i} className="fa-solid fa-star"></i>);
  }
  for (let i = 0; i < restOfStars; i++) {
    emptyStars.push(<i key={i} className="fa-regular fa-star"></i>);
  }
  

        return (
    <div>
      {fullStars}
      {emptyStars}
    </div>
  );
};

export default Star;
