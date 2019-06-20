EXEMPLUL TODOLIST
/////////////////////////////////////////////////////////////////////////
import React from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = { 
        list: [], 
        inputValue: "" 
    };
    this.getInputValue = this.getInputValue.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  getInputValue(event) {
    this.setState({ inputValue: event.target.value });
  }
  addItem() {
    const array = this.state.list;
    array.push(this.state.inputValue);
    this.setState({list: array, inputValue: ''})

    
  }

  render() {

    return (
      <div>
        <h1>Wish list</h1>
        <ToDoInput 
        inputValueProp={this.state.inputValue} 
        getInputValueProp={this.getInputValue} 
        addItemProp={this.addItem} 
        />

        <ToDoList listProp={this.state.list} />
      </div>
    );
  }
}

export default ToDo;

////////////////////////////////////////////////////////////////
import React from "react";

const ToDoInput = (props) => {
  return <div>
  <input value={props.inputValueProp} onChange={props.getInputValueProp} />
  <button onClick={props.addItemProp}>Add</button>
  </div>;

};
export default ToDoInput;
///////////////////////////////////////////////////////////////////////////
import React from "react";

// function ToDoList() {

// }

const ToDoList = props => {
  return (
    <ul>
      {
          props.listProp.map(item => {
              return <li>{item}</li>
          })
      }
    </ul>
  );
};
export default ToDoList;
