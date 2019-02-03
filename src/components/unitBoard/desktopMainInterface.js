import React, { Component } from "react";
import SearchBox from "../sidebarSearch/searchBox";
import SearchResults from "../sidebarSearch/searchResults";
import UnitBoards from "./unitBoards";
class DesktopMainInterface extends Component {
  state = {};
  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };
  render() {
    return (
      <div className="h-full flex flex-col bg-grey-lightest ">
        <div
          className="searchBox flex-shrink m-auto pt-4"
          style={{ display: "table" }}
        >
          <SearchBox handleChange={this.handleChange} />
        </div>
        {this.state.searchString ? (
          <SearchResults
            data={this.props.data}
            searchString={this.state.searchString}
            maxWidth={"max-w-md mx-auto"}
          />
        ) : (
          <UnitBoards data={this.props.data} />
        )}
      </div>
    );
  }
}

export default DesktopMainInterface;
