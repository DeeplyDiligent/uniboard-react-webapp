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
  state = {
    data: ""
  };
  constructor(props) {
    super(props);
    this.props.db.get().then(this.storeData);
  }

  storeData = (doc) => {
    if (doc.exists) {
      this.setState({ data: doc.data() });
    }
  }

  componentDidUpdate() {
    var displayString = isMobileOnly ? "none" : "table";
    return displayString;
  }

  render() {
    if (this.state.data) {
      // console.log(this.state.data);
      return (
        <div className="h-full mb-4 bg-grey-lightest ">
          <div
            className="searchBox m-auto pt-4"
            style={{ display: this.componentDidUpdate() }}
          >
            <Search />
            <div />
            <div />
          </div>
          <UnitBoards database={this.state.data} />
        </div>
      );
    } else {
      return <div className="loader">Begging Moodle for Data...</div>;
    }
  }
}

export default Home;
