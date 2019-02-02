import React, { Component } from 'react';
import WeekCard from './weekCard';
import database from '../../data'
class UnitBoard extends Component {
    render() { 
        const colorList = ['#ebb2fc','#fae0a4','#a4cdfc','#90eea9', 'blue-light']
        var borderColor = colorList[this.props.number]
        return ( 
        <div style={{minWidth:"250px", overflow:'hidden', borderRadius:'6px', borderColor:borderColor}} 
            className='flex flex-1 max-w-sm overflow-hidden shadow-lg m-2 bg-white border-b-8 flex-col' >
                <div className="flex justify-between content-center px-6 py-3 bg-white border-b border-grey-light flex-no-shrink" >
                    <div className="flex1">
                        <i className="text-2xl text-grey fab fa-flickr"></i>
                        <span className=" text-3xl font-semibold ml-4">{database.shortenName(this.props.unitName)}</span>
                    </div>
                    <div className="flex1 mt-2">
                        <i className="text-xl text-grey-dark fas fa-ellipsis-v"></i>
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
 //height: 'calc(100% - 32px)'
export default UnitBoard;