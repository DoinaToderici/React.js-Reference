import React from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = { list: [], inputValue: "" };
    this.getInputValue = this.getInputValue.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  getInputValue(event) {
    // aceasta functie la fiecare modificare pune valoarea modificarii in inputValue
    this.setState({ inputValue: event.target.value }); //event.target.value  este valoarea introdusa in input
  }
  addItem() {
    const array = this.state.list;
    array.push(this.state.inputValue);
    this.setState({ list: array, inputValue: "" });
  }

  deleteItem(item) {
    const array = this.state.list;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({ list: array });
  }

  render() {
    return (
      <div>
        <h1>Wish list</h1>
        <ToDoInput
          inputValue={this.state.inputValue}
          getInputValue={this.getInputValue}
          addItem={this.addItem}
        />
        <ToDoList listProp={this.state.list} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
export default ToDo;
