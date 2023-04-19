import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onSetListings }) {


  function handleDelete(listingId) {
    fetch(`http://localhost:6001/listings/${listingId}`, {
      method:'DELETE',
    })
    .then((resp) => resp.json())
    .then(() => {
      const remainingListings = listings.filter((listing) => listing.id !== listingId)
      onSetListings(remainingListings)
    })
  }
  const allListings = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} onDeleteListing={handleDelete}/>
  })

  return (
    <main>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
