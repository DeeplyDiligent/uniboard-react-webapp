import React, { Component } from 'react';
import UnitBoard from './unitBoard'
import {isMobileOnly} from 'react-device-detect';


class UnitBoards extends Component {

    
    render() { 
        return ( 
            <div className="jumbotron flex p-2 " style={{height: isMobileOnly ? 'calc(100% - 10px)' : 'calc(100% - 68px)', overflowX:"scroll", overflowY:"hidden"}}>
            {Array(4).fill(1).map((i,j)=><UnitBoard key={j} number={j}/>)}
            <div>&nbsp;</div>
            </div>
         )
    }
}

//height: 'calc(100% - 68px)
 
export default UnitBoards;