import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const { id, image, description, location} = listing

  function handleFavorite(){
    setIsFavorite((isFavorite) => !isFavorite)
  }

  console.log(listing)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" isFavorite={isFavorite} onClick={handleFavorite}>
        {isFavorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => onDeleteListing(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
