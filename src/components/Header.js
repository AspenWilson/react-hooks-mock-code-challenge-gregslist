import React from "react";
import Search from "./Search";

function Header({setSearchKey}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchKey={setSearchKey}/>
    </header>
  );
}

export default Header;
