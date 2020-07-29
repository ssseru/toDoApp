import React from "react";

function ToDoItem(props) {
  let colorC = {
    color:"lightBlue",
    fontWeight: "bold",
    textDecoration: "line-through",
    fontStyle: "italic"
    }
  return (
    <div className="todoitems">
      <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}/>
      {props.item.completed ? <p style={colorC}>{props.item.text}</p> : <p>{props.item.text}</p>}
    </div>
  );
}

export default ToDoItem;
