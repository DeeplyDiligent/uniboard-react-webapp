import React, { Component } from 'react';
import UnitBoard from './unitBoard'
import {isMobileOnly} from 'react-device-detect';


class UnitBoards extends Component {
    constructor(props){
        super(props)
    }
  
    render() {
        return ( 
            <div className="flex max-w-5xl mx-auto p-2" style={{height: isMobileOnly ? 'calc(100% - 10px)' : 'calc(100% - 68px)', overflowX:"scroll", overflowY:"hidden"}}>
            {Object.keys(this.props.database).map((i,j)=>{
                if(i!='date'){
                    return <UnitBoard key={j} database={this.props.database[i]} unitName={i} number={j}/>
                }
                return false;
            })}
            <div>&nbsp;</div>
            </div>
         )
    }
}

//height: 'calc(100% - 68px)
 
export default UnitBoards;