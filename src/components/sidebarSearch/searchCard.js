import * as React from "react";
import database from "../../data";

class SearchCard extends React.Component {
  state = {};
  render() {
    return (
      <a
        target="_blank"
        className="my-2 flex rounded overflow-hidden shadow m-2 p-2 bg-white"
        href={this.props.link}
        style={{
          color: "black",
          textDecoration: "none"
        }}
      >
        <img
          style={{ height: "fit-content" }}
          className="mr-2 mt-1"
          src={this.props.img}
        />
        <div>
          <div>{database.shortenName(this.props.subject)} </div>
          <div className="text-lg">{this.props.text} </div>
        </div>
      </a>
    );
  }
}

export default SearchCard;
