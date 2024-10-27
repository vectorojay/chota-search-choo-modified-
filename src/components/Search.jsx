import React, { useContext } from "react";
import { useResultContext } from "./ResultContextProvider";

const Search = () => {
  const { searchTerm, setSearchTerm } = useResultContext();
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default Search;
