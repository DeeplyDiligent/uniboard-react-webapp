import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="rounded-full shadow-inner bg-white sm:bg-grey-lightest p-4">
        <i className="fas fa-search mr-4" />
        <input
          className="bg-white sm:bg-grey-lightest"
          placeholder="Search Units, PDFs, Forums..."
          style={{width:"15rem"}}
        />
      </div>
    );
  }
}

export default Search;
