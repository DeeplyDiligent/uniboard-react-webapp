import React, { Component } from "react";
import MobileUnitBoards from "./mobileUnitBoards";
class MobileMainInterface extends Component {
  state = {};
  render() {
    return <MobileUnitBoards data={this.props.data} />;
  }
}

export default MobileMainInterface;
