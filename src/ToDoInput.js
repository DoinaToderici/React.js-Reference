import React from "react";

const ToDoInput = props => {
  return (
    <div>
      <input value={props.inputValue} onChange={props.getInputValue} />
      <button onClick={props.addItem}>Add</button>
    </div>
  );
};
export default ToDoInput;
