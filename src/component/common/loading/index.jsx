import React from "react";
import "./style.scss";

const Loading = () => {
  return (
    <div className="flex-align-item-center flex-container flex-justify-center loading">
      <div className="item">
        <div className="logo">
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

export default Loading;
