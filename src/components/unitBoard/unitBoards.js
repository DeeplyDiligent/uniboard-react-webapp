import React, { Component } from 'react';
import UnitBoard from './unitBoard'

class UnitBoards extends Component {
    render() { 
        return ( 
            <div className="jumbotron flex p-2 " style={{height: 'calc(100% - 68px)', overflowX:"scroll"}}>
            {Array(4).fill(1).map((i,j)=><UnitBoard key={j} />)}
            <div>&nbsp;</div>
            </div>
         )
    }
}
 
export default UnitBoards;