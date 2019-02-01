import React, { Component } from 'react';
import UnitBoard from './unitBoard';


class UnitBoards extends Component {
    constructor(props){
        super(props)
    }
  
    render() {
        return ( 
            <div className="flex flex-grow max-w-5xl p-2" style={{ overflowX:"scroll", overflowY:"hidden"}}>
            {Object.keys(this.props.data).map((key, index) => {
                return <UnitBoard unitData={this.props.data[key]} unitName={key} unitCode={key.unitCode} key={key} number={index}/>
            })}
            <div>&nbsp;</div>
            </div>
         )
    }
}

//height: 'calc(100% - 68px)
 
export default UnitBoards;