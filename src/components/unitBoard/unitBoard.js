import React, { Component } from 'react';
import WeekCard from './weekCard';
class UnitBoard extends Component {
    render() { 
        return ( <div style={{minWidth:"250px", height: 'calc(100% - 32px)', overflow:'scroll'}} className="flex-1 max-w-sm rounded overflow-hidden shadow-lg m-2 bg-white">
        <div className="px-6 py-4 bg-white " >
        <div className='flex'> 
        <i className="fas fa-graduation-cap mt-2"></i>
          <div className=" text-3xl ml-4">KFC3241</div>
          </div>
        </div>
        <div className="px-4 py-4" style={ {overflow: 'scroll', height: 'calc(100% - 66px)'}}>
            {Array(10).fill(1).map((i,j)=><WeekCard key={j} />)}
        </div>
      </div> );
    }
}
 
export default UnitBoard;