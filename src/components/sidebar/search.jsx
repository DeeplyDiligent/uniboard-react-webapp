import React, { Component } from "react";
import SearchExample from './SearchExample'

class Search extends Component {

  constructor(props){
super(props);
this.createLib = this.createLib.bind(this)

}

  state = {
    libraries: [],
    colors:[]
  };

  createLib(itemVals,j,k){
  

    Object.assign(itemVals, {color : j})
    this.state.libraries.push(itemVals)
    // this.state.colors.push(itemVals)

}

  render() {
  
  var libraries = []
  if(this.props.database != null){
        Object.values(this.props.database).map((item,j) => Object.values(item).map((itemVals) => this.createLib(itemVals,j)))
        // Object.values(this.props.database).map(item => Object.values(item).map(itemVals => console.log(itemVals)))
        // Object.values(this.props.database).map((item ,j) => console.log(j))
        //  Object.values(this.props.database).map(item,j => console.log(Object.values(item)))
  }
//  this.state.libraries.map(thing => console.log(thing.color))
    return (
      <div id="content" className='w-full' >
      <SearchExample items={this.state.libraries} />,
      </div>
    );
  
  }
}

export default Search;
  //  <div className="rounded-full shadow-inner bg-white sm:bg-grey-lightest p-4 flex">
  //       <i className="fas fa-search mr-4" />
  //       <input
  //         className="bg-white sm:bg-grey-lightest"
  //         placeholder="Search Units, PDFs, Forums..."
  //         style={{width:"15rem"}}
  //       />