import React, { Component } from "react";
import MobileUnitBoardMinimized from "./mobileUnitBoardMinimized";
import MobileUnitBoardMaximised from "./mobileUnitBoardMaximised";
class MobileUnitBoards extends Component {
  state = { itemIsMaximised: false, key: null, index: null };

  maximiseItem = (key, index) => {
    this.setState({ itemIsMaximised: true, key: key, index: index });
  };

  minimizeItems = () => {
    this.setState({ itemIsMaximised: false });
  };

  render() {
    if (!this.state.itemIsMaximised) {
      return (
        <div
          className="flex flex-grow flex-col max-w-5xl p-2"
          style={{ overflowX: "scroll", overflowY: "hidden" }}
        >
          {Object.keys(this.props.data).map((key, index) => {
            return (
              <MobileUnitBoardMinimized
                unitData={this.props.data[key]}
                unitName={key}
                key={key}
                maximiseItem={this.maximiseItem}
                number={index}
                
              />
            );
          })}
          <div>&nbsp;</div>
        </div>
      );
    } else {
      console.log(this.state.key);
      return (
        <MobileUnitBoardMaximised
          unitName={this.state.key}
          number = {this.state.index}
          minimizeItems={this.minimizeItems}
          unitData={this.props.data[this.state.key]}
        />
      );
    }
  }
}

export default MobileUnitBoards;
