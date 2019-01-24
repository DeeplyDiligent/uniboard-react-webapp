import * as React from "react";

class SearchCard extends React.Component {
  state = {};
  render() {
    return (
      <a
        className="w-full border-b-2 mt-2"
        href={this.props.link}
        style={{
          color: "black",
          display: "-webkit-inline-box",
          textDecoration: "none",
          borderColor: this.props.color
        }}
      >
        <img className="mr-1" src={this.props.img} />
        <div>{this.props.text} </div>
      </a>
    );
  }
}

export default SearchCard;
