import React, { Component } from 'react';
import UnitBoards from './unitBoard/unitBoards'
import Search from './unitBoard/search'

class Home extends Component {

  
    render() {
        console.log(this.props.database)
      return (
        <div>
          <div className='searchBox table	m-auto mt-4' >
        <Search />
        </div>
        <UnitBoards />

        
        </div>
      );
    }
  }

export default Home;