import React, { Component } from 'react';
import UnitBoards from './unitBoard/unitBoards'
import Search from './unitBoard/search'
import firebase from 'firebase';

class Home extends Component {

  
    render() {
      return (
        <div className='h-full bg-grey-lightest'>
          <div className='searchBox table	m-auto pt-4' >
        <Search />
        </div>
        <UnitBoards />

        
        </div>
      );
    }
  }

export default Home;