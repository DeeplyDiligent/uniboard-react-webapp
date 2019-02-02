import React, { Component } from "react";
import SearchCard from "./searchCard";
import database from "../../data";
import Fuse from "fuse.js";

class SearchResults extends Component {
  state = {};
  componentWillMount() {}

  render() {
    let allData = database.transformToFlatDict(this.props.data),
      searchString = this.props.searchString.trim().toLowerCase();
    console.log(allData);
    var options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["name", "subject", "linktype"]
    };
    var fuse = new Fuse(allData, options); // "list" is the item array

    if (searchString.length > 0) {
      allData = fuse.search(searchString);
    }
    return (
      <div className="w-full flex-grow">
        {allData.map((i, j) => (
          <SearchCard
            key={j}
            link={i.url}
            img={i.iconLink}
            text={i.name}
            subject={i.subject}
          />
        ))}
      </div>
    );
  }
}

export default SearchResults;
