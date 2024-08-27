import React, { useState } from 'react';

const GameCard = ({ title, description, imgSrc }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="game-card">
      <img src={imgSrc} alt={title} className="game-card-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleLike}>Like ({likes})</button>
    </div>
  );
};

export default GameCard;
