import React from "react";
import "./SearchBar.scss";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="search-form">
      <IoSearchOutline />
      Search
    </div>
  );
};

export default SearchBar;
