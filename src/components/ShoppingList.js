import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState ("")
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function filterWords(value) {
    setSearchQuery(value)

  }

  const itemsToDisplay = items
  .filter ((item) =>{return item.name.toLowerCase().includes(searchQuery.toLowerCase())})
  .filter((item) => {
    if (selectedCategory === "All") return true 
    //&& (searchQuery.toLowerCase() === item.includes().toLowerCase())

    return item.category === selectedCategory
  });

  return (
    <div className="ShoppingList">
      <ItemForm handleItemFormSubmit={handleItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} filterWords={filterWords} searchQuery={searchQuery} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
