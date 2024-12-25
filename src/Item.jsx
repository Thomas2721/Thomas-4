import React from 'react';
import './Item.css'

function Item({ item, removeItem }) {
  return (
    <li>
      {item}
      <button onClick={() => removeItem(item)}>Delete</button>
    </li>
  );
}

export default Item;
