import React, { Component } from "react";
import MainInterface from "./unitBoard/mainInterface";

class Home extends Component {
  state = { searchString: "" };
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data) {
      return <MainInterface data = {this.props.data}  />;
    } else {
      return <div className="loader">Begging Moodle for Data...</div>;
    }
  }
}

export default Home;
