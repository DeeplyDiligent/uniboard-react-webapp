import React, { Component } from 'react';
import UnitBoards from './unitBoard/unitBoards'
import Search from './sidebar/search'
import firebase from 'firebase';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


class Home extends Component {

componentDidUpdate(){
  var displayString = isMobile ? 'none' : 'table'
  return (displayString)
}
    render() {
      return (
        <div className='h-full bg-grey-lightest '>
          <div className='searchBox	m-auto pt-4' style={{display: this.componentDidUpdate()}} >
          <Search/>
          <div/>
          <div/>
        </div>
        <UnitBoards />
        </div>
        
      );
    }
  }

export default Home;