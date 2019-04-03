import React, { Component } from "react";
import "./style.scss";
import ProfileTile from "../common/profileTile";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const profileTile = document.querySelectorAll(".profileTile");
    profileTile.forEach(element => {
      element.addEventListener("mouseover", () => {
        profileTile.forEach(innerElement => {
          innerElement.classList.add("inActive");
        });
        element.classList.remove("inActive");
      });
      element.addEventListener("mouseleave", () => {
        profileTile.forEach(innerElement => {
          innerElement.classList.remove("inActive");
        });
        // element.classList.remove("inActive");
      });
    });
  }

  render() {
    const TempProfileTile = [];
    const name = [
      "Ira Frederick  ",
      "Corinna Fong  ",
      "Ulysses Ebner  ",
      "Esperanza Baumer  ",
      "Hilario Feeney  ",
      "Angella Knaus  ",
      "Gaynelle Burdett  ",
      "Mindi Farias  ",
      "Lorita Worthy  ",
      "Miki Manigault  ",
      "Tameika Yazzie  ",
      "Karlyn Levasseur  ",
      "Pearlie Deblasio  ",
      "Maryln Wheeler  ",
      "Robbi Krum  ",
      "Agatha Stalker  ",
      "Olympia Scales  ",
      "Owen Worth  ",
      "Mel Kowalsky  ",
      "Macie Rodkey"
    ];
    for (let i = 0; i < 20; i++) {
      const random = (Math.random() * (9 - 1 + 1) + 1).toFixed(1);
      TempProfileTile.push({
        username: name[i],
        rating: random
      });
    }
    // console.log(TempProfileTile);

    const profiles = TempProfileTile.sort((a, b) => b.rating - a.rating);
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
            <div className="flex-align-item-center flex-column flex-container flex-justify-center flex-wrap profileTile add">
              <div className="item text-center">
                <i className="fas fa-plus" style={{ fontSize: "30px" }} />{" "}
                <p style={{ paddingTop: "2px" }}>New User</p>
              </div>
            </div>
            {profiles.map((profile, i) => (
              <ProfileTile
                rating={profile.rating}
                username={profile.username}
                key={i}
                mouseEnter={this.handleMouseEnter}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
