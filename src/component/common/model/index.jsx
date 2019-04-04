import React, { Component } from "react";
import "./style.scss";

class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex-align-item-center flex-container flex-justify-center model">
        <div className="item flex-container flex-column flex-align-item-start flex-justify-space-between flex-wrap">
          <div className="item header">
            <h3>Create New User</h3>
          </div>
          <div className="item body w-100">{this.props.children[0]}</div>
          <div className="item footer text-center w-100">
            {this.props.children[1]}
          </div>
        </div>
      </div>
    );
  }
}

export default Model;
