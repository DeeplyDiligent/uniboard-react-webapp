import React, { Component } from 'react';

class SearchExample extends React.Component {
  /*  constructor(props) {
      super(props);
      // var self = this;
      this.handleChange = this.handleChange.bind(this);
    }*/
     state = { searchString: '' }
     handleChange = (e) => {
       this.setState({ searchString:e.target.value });
     }
     render() {
       var libraries = this.props.items,
           searchString = this.state.searchString.trim().toLowerCase();
       if (searchString.length > 0) {
         libraries = libraries.filter(function(i) {
           return String(i.text).toLowerCase().match( searchString );
         });
       }
       return (
         <div>
           <div className="rounded-full shadow-inner bg-white sm:bg-grey-lightest p-4 flex">
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search Units, PDFs, Forums..."/>
            </div>

            <ul className='w-full' style={{listStyleType : 'none', display:'contents'}}>
              {libraries.map(function(i) {
                  return (
                  <a className='w-full' href={i.link} style={{color:'black'}}>
                  <li style={{lineHeight:'25px'}}>{i.text} 
                  </li>
                  </a>
                  )
              }) } 
            </ul>


         </div>
       );
     }
  }
  
  // Constant, library
 
  
  // put input and display on page
  

  export default SearchExample