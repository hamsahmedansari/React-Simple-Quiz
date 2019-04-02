import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import "./App.scss";
// import Login from "./component/login";
import Loading from "./component/common/loading";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Loading />
      </div>
    );
  }
}

export default App;
