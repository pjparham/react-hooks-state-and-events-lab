import React, { useState } from "react";

function Item({ name, category }) {
  const [itemStatus, toggleStatus] = useState(false)

  function toggleStatusClick(){
    toggleStatus(!itemStatus)
  }

  const itemClass = itemStatus ? "in-cart" : "";


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleStatusClick} className="add">{itemStatus ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
