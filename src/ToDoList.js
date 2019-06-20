import React from "react";

const TodoList = props => {
  return (
    <ul>
      {" "}
      {props.listProp.map(item => {
        return (
          <li>
            {item}{" "}
            <button onClick={() => props.deleteItem(item)}>Sterge</button>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
