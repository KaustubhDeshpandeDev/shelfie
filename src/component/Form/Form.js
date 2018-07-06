import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      userinputOne: "",
      userinputTwo: "",
      userinputThree: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleChange(event) {
    this.setState({
      userinputOne: event.target.value
    });
  }

  handleAdd() {
    this.setState({
      userinputOne: "test"
    });
  }
  handleCancel() {}

  render() {
    return (
      <div>
        <p> Form </p>
        <h1>{this.state.userinputOne}</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.userinputOne}
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.userinputOne}
          onChange={this.handleChange}
        />
        <button onChange={this.handleAdd}>Add</button>
        <button onChange={this.handleCancel}>Cancel</button>
      </div>
    );
  }
}

// import React, { component } from "react";

// class Form extends component {
//   constructor() {
//     super();
//   }
//   render() {
//     return <div>Form</div>;
//   }
// }

// export default Form;
