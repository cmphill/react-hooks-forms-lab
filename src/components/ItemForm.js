import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({handleItemFormSubmit}) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleNameChange(event) {
    setItemName(event.target.value)
  }
  function handleCategoryChange(event) {
    setItemCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newObj = {      id: uuid(),
      name: itemName,
      category: itemCategory,}
    handleItemFormSubmit(newObj)
  }
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
