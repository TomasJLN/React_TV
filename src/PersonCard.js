import React from 'react';

const PersonCard = ({ item }) => {
  const img = item.image ? item.image : 'NA.png';
  return (
    <div className="card">
      <img className="img-card" src={img} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
};

export default PersonCard;
