import React from "react";
// import  PropType  from "prop-types";
import "./style.scss";

const Loading = props => {
  const { status: isComplete } = props;
  return (
    <div className="flex-align-item-center flex-container flex-justify-center loading">
      <div className="item">
        <div className={`logo ${isComplete ? "complete" : "incomplete"}`}>
          <h1>
            <i className="fab fa-affiliatetheme" /> <span>Skill Enhancer</span>
          </h1>
        </div>
      </div>
      <div className="item">
        <p>Page Name</p>
      </div>
    </div>
  );
};

// Loading.propTypes = {

// }

export default Loading;
