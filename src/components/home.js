import React, { Component } from "react";
import UnitBoards from "./unitBoard/unitBoards";
import SearchBox from "./sidebarSearch/searchBox";
import { isMobileOnly } from "react-device-detect";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchResults from './sidebarSearch/searchResults'

class Home extends Component {
  state = { searchString: "" };
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    let styles = {};
    styles.searchBox = { display: isMobileOnly ? "none" : "table" };
    if (this.props.data) {
      // console.log(this.state.data);
      return (
        <div className="h-full flex flex-col bg-grey-lightest ">
          <div
            className="searchBox flex-shrink m-auto pt-4"
            style={styles.searchBox}
          >
            <SearchBox handleChange={this.handleChange} />
          </div>
          <Switch>
            <Route
              exact
              path={`/search`}
              render={() => <SearchResults data={this.props.data} searchString = {this.state.searchString} />}
            />
            <Route
              render={() => <UnitBoards data={this.props.data} />}
            />
          </Switch>
        </div>
      );
    } else {
      return <div className="loader">Begging Moodle for Data...</div>;
    }
  }
}

export default Home;
