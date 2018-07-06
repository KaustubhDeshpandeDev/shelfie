import React, { Component } from "react";
import axios from "axios";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import Product from "./component/Product/Product";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventoryList: {
        name: "test",
        price: 40,
        image: ""
      }
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <Dashboard />
          <div>
            <Product />
          </div>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
