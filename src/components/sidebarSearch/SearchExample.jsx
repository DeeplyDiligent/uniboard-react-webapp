import React, { Component } from "react";
import SearchCard from "./searchCard";

class SearchExample extends React.Component {
  borderColors = ["#ebb2fc", "#fae0a4", "#a4cdfc", "#90eea9", "blue-light"];
  /*  constructor(props) {
      super(props);
      // var self = this;
      this.handleChange = this.handleChange.bind(this);
    }*/

  state = { searchString: "" };
  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };

  renderSearchCard = () => {};

  render() {
    var libraries = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      libraries = libraries.filter(function(i) {
        return String(i.text)
          .toLowerCase()
          .match(searchString);
      });
    }

    return (
      <div>
        <div
          className="rounded-full shadow-inner bg-white sm:bg-grey-lightest p-4  flex"
          style={{ display1: "-webkit-fill-available" }}
        >
          <i className="fas fa-search mr-4" />
          <input
            type="text"
            className="bg-transparent"
            value={this.state.searchString}
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </div>
        <div className="w-full">
          {libraries.map(
            (i, j) => (
              <SearchCard
                key={j}
                link={i.link}
                color={this.borderColors[i.color]}
                img={i.img}
                text={i.text}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

// Constant, library

// put input and display on page

export default SearchExample;
