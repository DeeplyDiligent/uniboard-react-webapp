import React, { Component } from "react";
import SearchExample from './SearchExample'

class Search extends Component {
  state = {};


  render() {
   
  var libraries = []
  if(this.props.database != null){
        Object.values(this.props.database).map(item => Object.values(item).map(itemVals => libraries.push(itemVals)))

  }
  
 
    return (
      <div id="content" className='w-full' >
      <SearchExample items={libraries} />,
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