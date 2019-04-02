import React, { Component } from "react";
import "./style.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login">
        <div className="flex-container flex-column flex-align-item-center flex-justify-start">
          <div className="item">
            <h2>Login</h2>
          </div>
          <div className="item">body</div>
        </div>
      </div>
    );
  }
}

export default Login;
