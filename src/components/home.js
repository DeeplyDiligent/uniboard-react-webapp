import React, { Component } from 'react';
import UnitBoards from './unitBoard/unitBoards'
import Search from './sidebar/search'
import firebase from 'firebase';
import {isMobileOnly} from 'react-device-detect';


class Home extends Component {


    render() {
      console.log(isMobileOnly)
      return (
        <div className='h-full bg-grey-lightest '>
          <div className='searchBox	m-auto pt-4' style={{display: isMobileOnly ? 'none' : 'table'}} >
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