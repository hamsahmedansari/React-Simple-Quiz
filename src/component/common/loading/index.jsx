import React, { Component } from "react";
// import  PropType  from "prop-types";
import "./style.scss";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      status: false,
      visible: false
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("abc");

    return {
      ...prevState,
      status: nextProps.status
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);

    if (!this.state.isComplete) {
      this.setState({
        isComplete: true
      });
    }
    if (!this.state.visible && this.state.isComplete) {
      setTimeout(() => {
        this.setState({
          visible: true
        });
      }, 2500);
    }
  }
  render() {
    const { isComplete, visible } = this.state;
    if (visible) {
      return null;
    } else {
      return (
        <div
          className={`flex-align-item-center flex-container flex-justify-center loading ${
            isComplete ? "complete" : ""
          }`}
        >
          <div className="item">
            <div className={`logo ${isComplete ? "complete" : "incomplete"}`}>
              <h1>
                <i className="fab fa-affiliatetheme" />
                <span>Skill Enhancer</span>
              </h1>
            </div>
          </div>
          <div className="item">
            <div className={` ${isComplete ? "active" : ""}`}>
              <p>Page Name</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Loading;

// Loading.propTypes = {

// }
