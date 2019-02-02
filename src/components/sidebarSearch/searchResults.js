import React, { Component } from "react";
import SearchCard from './searchCard';
import database from "../../data";
import * as JsSearch from "js-search";

class SearchResults extends Component {
  state = {};
  render() {
    let libraries = database.transformToFlatDict(this.props.data),
    searchString = this.props.searchString.trim().toLowerCase();
    let search = new JsSearch.Search("url");
    search.tokenizer = {
      tokenize(text) {
        var regexStr = text.match(/[a-z]+|[^a-z]+/gi);
        return regexStr;
      }
    };
    search.addIndex("linktype");
    search.addIndex("subject");
    search.addIndex("name");
    search.addDocuments(libraries);

    if (searchString.length > 0) {
      libraries = search.search(searchString);
    }
    return (
      <div className="w-full flex-grow">
        {libraries.map((i, j) => (
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
