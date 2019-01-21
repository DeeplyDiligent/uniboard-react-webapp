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

      var borderColors = ['#ebb2fc','#fae0a4','#a4cdfc','#90eea9', 'blue-light']


       return (
         <div>
           <div className="rounded-full shadow-inner bg-white sm:bg-grey-lightest p-4  flex" style={{display1: '-webkit-fill-available'}}>
           <i className="fas fa-search mr-4" />
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search Units, PDFs, Forums..."/>
            </div>

            <ul className='w-full' style={{listStyleType : 'none', display:'contents'}}>
              {libraries.map(function(i) {
                  return (
                  <a className='w-full border-b-2 mt-2' href={i.link} style={{color:'black', display:'-webkit-inline-box', textDecoration:'none', borderColor:borderColors[i.color]}}>
                  <img className='mr-1' src={i.img}></img>
                  <li >{i.text} 
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