import React from "react";

class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = { firstName: "Doina", lastName: "Toderici" };
    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState({
      firstName: this.firstName.value,
      lastName: this.lastName.value
    });
    this.h1.style.color === "red"  ? this.h1.style.color = "green" :  this.h1.style.color = "red";
  }

  componentDidMount() {
    this.firstName.focus();
    this.lastName.focus();
  }

  render() {
    return (
      <div>
        <h1
          style={{ color: this.props.color ? this.props.color : "yellow" }}
          ref={title => (this.h1 = title)}
        >
          Hello {this.state.firstName} {this.state.lastName}
        </h1>
        <button onClick={this.changeName}>Change Name</button>
        <input ref={firstName => (this.firstName = firstName)} />
        <input ref={lastName => (this.lastName = lastName)} />
      </div>
    );
  }
}

export default MyComponent;
