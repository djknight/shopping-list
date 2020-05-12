import React from "react";

export default function Item(props) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={props.item.completed} />
        {props.item.text}
      </label>
    </li>
  );
}
