import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="inline-flex rounded-full shadow-inner bg-grey-lighter p-4">
        <i className="fas fa-search mr-4" />{" "}
        <input
          className="bg-grey-lighter"
          placeholder="Search Units, PDFs, Forums..."
          style={{width:"15rem"}}
        />
      </div>
    );
  }
}

export default Search;
