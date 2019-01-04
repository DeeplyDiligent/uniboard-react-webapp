import React, { Component } from 'react';
import UnitBoards from './unitBoard/unitBoards'
import Search from './unitBoard/search'

class Home extends Component {
    render() {
      return (
        <div>
          <div className='searchBox	m-auto mt-4 ' style={{width:'fit-content'}} >
        <Search />
        </div>
        <UnitBoards/>
        
        </div>
      );
    }
  }

export default Home;