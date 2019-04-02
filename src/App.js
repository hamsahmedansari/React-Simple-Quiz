import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import "./App.scss";
// import Login from "./component/login";
import Loading from "./component/common/loading";

class App extends Component {
  state = {
    loading: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true });
    }, 5000);
  }
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Loading status={this.state.loading} />
      </div>
    );
  }
}

export default App;
