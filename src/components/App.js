import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((listings) => {
      setListings(listings)
    })
  }, [])
  
  const searchedListings = listings.filter((listing) => listing.description.toLowerCase().includes(searchKey.toLowerCase()))


  return (
    <div className="app">
      <Header setSearchKey={setSearchKey} />
      <ListingsContainer listings={searchedListings} onSetListings={setListings}/>
    </div>
  );
}

export default App;
