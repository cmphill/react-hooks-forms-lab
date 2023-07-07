import React from "react";

function Filter({ onCategoryChange, filterWords, searchQuery }) {
  function handleSearchChange(event) {
    filterWords(event.target.value)
  }
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
