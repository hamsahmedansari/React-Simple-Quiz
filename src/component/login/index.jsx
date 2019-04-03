import React, { Component } from "react";
import "./style.scss";
import ProfileTile from "../common/profileTile";

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
            <h1>
              <i className="fab fa-affiliatetheme" /> &nbsp;
              <span>Skill Enhancer</span>
            </h1>
          </div>
          <div className="flex-align-item-center flex-container flex-justify-center flex-row item w-100 flex-wrap">
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
            <ProfileTile />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
