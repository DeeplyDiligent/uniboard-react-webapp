import React, { Component } from 'react';
import UnitBoard from './unitBoard'

class UnitBoards extends Component {
    render() { 
        return ( 
            <div className="jumbotron flex overflow-scroll p-2 " style={{height: 'calc(100% - 68px)'}}>
            {Array(4).fill(1).map((i,j)=><UnitBoard key={j} />)}
            <div className="flex-1">&nbsp;</div>
            </div>
         )
    }
}
 
export default UnitBoards;