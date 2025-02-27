import React from "react";
import { useParams } from "react-router-dom";

const items = [
  { id: 1, name: "Item One", description: "Description for Item One" },
  { id: 2, name: "Item Two", description: "Description for Item Two" },
  { id: 3, name: "Item Three", description: "Description for Item Three" },
];

function ItemDetail() {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;
