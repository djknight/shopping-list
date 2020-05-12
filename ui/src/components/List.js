import React from "react";
import Item from "./Item";

const items = [
  {
    id: 1,
    text: "First item",
    completed: false,
  },
  {
    id: 2,
    text: "Second item",
    completed: false,
  },
];

export default function List(props) {
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}
