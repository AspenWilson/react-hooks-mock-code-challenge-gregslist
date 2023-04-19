import React, {useState} from "react";

function Search({setSearchKey}) {
  const[text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    setSearchKey(text);
  }

  function handleSearchValue(e) {
    setText(e.target.value)
  }

  console.log(text)

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={text}
        onChange={handleSearchValue}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
