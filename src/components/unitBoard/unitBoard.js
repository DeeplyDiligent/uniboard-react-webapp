import React, { Component } from 'react';
import WeekCard from './weekCard';
class UnitBoard extends Component {
    render() { 
        return ( <div style={{minWidth:"250px"}} className="flex-1 max-w-sm rounded overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4 bg-green-lightest">
          <div className="font-bold text-4xl mb-2">KFC3241</div>
        </div>
        <div className="px-4 py-4">
            {Array(10).fill(1).map((i,j)=><WeekCard key={j} />)}
        </div>
      </div> );
    }
}
 
export default UnitBoard;