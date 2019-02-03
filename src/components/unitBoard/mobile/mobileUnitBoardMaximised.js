import React, { Component } from 'react';
import database from '../../../data';
import WeekCard from '../weekCard';
class MobileUnitBoardMaximised extends Component {
    state = {  }
    render() { 
        const colorList = ['#ebb2fc','#fae0a4','#a4cdfc','#90eea9', 'blue-light']
        var borderColor = colorList[this.props.number]
        return ( 
            <div style={{minWidth:"250px", overflow:'hidden', borderRadius:'6px', borderColor:borderColor}} 
                className='flex flex-1 max-w-sm overflow-hidden shadow-lg m-4 bg-white border-b-8 flex-col' >
                <div className="flex justify-between content-center px-6 py-3 bg-white border-b border-grey-light flex-no-shrink" onClick = {this.props.minimizeItems} >
                    <div className="flex1">
                        <i className="text-2xl text-grey fab fa-flickr"></i>
                        <span className=" text-3xl font-semibold ml-4">{database.shortenName(this.props.unitName)}</span>
                    </div>
                    <div className="flex1 mt-2">
                        <i className="text-xl text-grey-dark fas fa-chevron-up"></i>
                    </div>
                </div>
                <div className="px-4 py-2" style={ {overflowY: 'scroll'}}>
                    {Object.keys(this.props.unitData).map((key, _)=>{
                        let value = this.props.unitData[key];
                        return <WeekCard weekName={value.name} data={value} unitName={this.props.unitName} 
                        key={key} branchId={key}/>
                    })}
                </div>
            </div> 
        );
    }
}
 
export default MobileUnitBoardMaximised;