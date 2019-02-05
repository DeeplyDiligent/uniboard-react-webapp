import React, { Component } from "react";
import SearchCard from "./searchCard";
import database from "../../data";
import Fuse from "fuse.js";

class SearchResults extends Component {
  state = {};
  componentWillMount() {
    this.allData = database.transformToFlatDict(this.props.data);
    var options = {
      shouldSort: true,
      tokenize: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["name", "subject", "linktype"]
    };
    this.fuse = new Fuse(this.allData, options);
  }

  render() {
    let searchString = this.props.searchString.trim().toLowerCase();
    
    if (searchString.length > 0) {
      this.allData = this.fuse.search(searchString);
    }
    let SearchResultsClasses = {};
    SearchResultsClasses.maxWidth = this.props.maxWidth?this.props.maxWidth:'';
    return (
      <div className={`flex-grow overflow-scroll ${SearchResultsClasses.maxWidth} mt-2`}>
        {this.allData.slice(0,30).map((i, j) => (
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
