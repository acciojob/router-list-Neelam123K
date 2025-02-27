import React from "react";
import { Link } from "react-router-dom";

const items = [
  { id: 1, name: "Item One", description: "Description for Item One" },
  { id: 2, name: "Item Two", description: "Description for Item Two" },
  { id: 3, name: "Item Three", description: "Description for Item Three" },
];

function ItemList() {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;