import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li>{props.text}</li>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
        className="deleteHoja"
      >
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
