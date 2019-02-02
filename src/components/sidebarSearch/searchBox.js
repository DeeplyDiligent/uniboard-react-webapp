import React, { Component } from "react";
class SearchBox extends Component {
  state = {};
  render() {
    return (
      <div
        className="rounded-full shadow-inner bg-white sm:bg-grey-lightest p-4  flex"
        style={{ display1: "-webkit-fill-available" }}
      >
        <i className="fas fa-search mr-4" />
        <input
          type="text"
          className="bg-transparent"
          value={this.state.searchString}
          onChange={this.props.handleChange}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default SearchBox;
