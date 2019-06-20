import React from "react";
class SearchComponent extends React.Component {            //  COPIL

  constructor() {
    super();
    this.state = { value: "" };
    this.update = this.update.bind(this);
  }

  update() {
    this.props.show(this.input.value);

    this.setState({ value: this.input.value });
  }

  render() {
    return (
      <div>
        <input ref={input => (this.input = input)} onChange={this.update} />
        <p>{this.state.value}</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

class MainComponent extends React.Component {                //  PARINTE

  constructor() {
    super();
    this.state = { name: "Doina", value: "" };
    this.changeName = this.changeName.bind(this);
    this.showValue = this.showValue.bind(this);
  }

  changeName() {
    this.setState({ name: this.state.name === "Ion" ? "Doina" : "Ion" });
    this.h1.style.color === "red"
      ? (this.h1.style.color = "green")
      : (this.h1.style.color = "red");
  }

  showValue(valeur) {
    this.setState({ value: valeur });
  }

  render() {
    return (
      <div>
        <h1
          style={{ color: this.props.color ? this.props.color : "yellow" }}
          ref={title => (this.h1 = title)}
        >
          Hello {this.state.name}
        </h1>
        <button onClick={this.changeName}>Change Name</button>
        <SearchComponent name={this.state.name} show={this.showValue} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default MainComponent;
