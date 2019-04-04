import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import "./App.scss";
import Login from "./component/login";
import Loading from "./component/common/loading";
import Model from "./component/common/model";

class App extends Component {
  state = {
    // loading: false,
    model: {
      isVisible: false,
      section: null,
      footer: null
    }
  };
  componentDidMount() {
    // const { loading } = this.state;
    // setTimeout(() => {
    //   this.setState({ loading: !loading });
    // }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    // const { loading } = this.state;
    // setTimeout(() => {
    //   this.setState({ loading: !loading });
    // }, 1000);
  }
  render() {
    const { loading, model } = this.state;
    return (
      <div className="App">
        <div className="pages">
          <Login model={this.createModel} />
        </div>
        <div className="common">
          {/* <Loading status={this.state.loading} /> */}
          {/* {this.state.loading && <Model />} */}
          {/* Model */}
        </div>
      </div>
    );
  }
}

export default App;
