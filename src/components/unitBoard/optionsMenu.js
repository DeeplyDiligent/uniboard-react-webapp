import React, { Component } from "react";
var Dropdown = require('react-simple-dropdown');
var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;

class OptionsMenu extends Component {
  state = {};
  render() {
    let hidden = this.props.hidden?"hidden":'';
    return false;
    // return (
    //   <div className = {"rounded overflow-hidden shadow absolute bg-white mt-2 "+hidden} style={{right:0}}>
    //     <div className = "p-2">Download</div>
    //   </div> 
    // );
  }
}

export default OptionsMenu;
