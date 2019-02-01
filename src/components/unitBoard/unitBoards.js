import React, { Component } from 'react';
import UnitBoard from './unitBoard'
import {isMobileOnly} from 'react-device-detect';


class UnitBoards extends Component {
    constructor(props){
        super(props)
    }
  
    render() {
        return ( 
            <div className="jumbotron flex p-2 " style={{height: isMobileOnly ? 'calc(100% - 10px)' : 'calc(100% - 68px)', overflowX:"scroll", overflowY:"hidden"}}>
            {Object.keys(this.props.data).map((key, _) => {
                return <UnitBoard unitData={this.props.data[key]} unitName={key} key={key}/>
            })}
            <div>&nbsp;</div>
            </div>
         )
    }
}

//height: 'calc(100% - 68px)
 
export default UnitBoards;