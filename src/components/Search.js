import React from "react";
import { useGlobalValues } from "../context";

const Search = () => {
  //
  const { searchTerm, setSearchTerm } = useGlobalValues();

  return (
    <div className="card w-75 mx-auto p-3 bg-light mb-5">
      <span className="fw-bold mb-1">Search Cocktails:</span>
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
