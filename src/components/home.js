import React, { Component } from "react";
import UnitBoards from "./unitBoard/unitBoards";
import Search from "./sidebarSearch/search";
import firebase from "firebase";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobileOnly
} from "react-device-detect";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    var displayString = isMobileOnly ? "none" : "table";
    return displayString;
  }

  render() {
    if (this.props.data) {
      // console.log(this.state.data);
      return (
        <div className="h-full bg-grey-lightest ">
          <div
            className="searchBox	m-auto pt-4"
            style={{ display: this.componentDidUpdate() }}
          >
            <Search />
            <div />
            <div />
          </div>
          <UnitBoards data={this.props.data} />
        </div>
      );
    } else {
      return <div className="loader">Begging Moodle for Data...</div>;
    }
  }
}

export default Home;
