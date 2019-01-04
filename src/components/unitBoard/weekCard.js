import React, { Component } from 'react';
class WeekCard extends Component {
    render() { 
         return (
             <div style={{width: "400px", height: "130px"}} 
             className="flex border-2 rounded border-light-grey p-4 m-4">
                 <div>
                 <div style={{width: "40px", height:"4px"}} className="bg-red-light mb-1"></div>
            
                 <div className="text-black font-semibold text-lg">Week X</div>
                 </div>
                 <div style={{width:"fit-content",marginLeft:"auto",marginRight:"0px"}} className="self-end">
                        <span className="px-3 py-1 text-sm font-semibold text-grey">Tasks: 6</span>
                        <span className="px-3 py-1 text-sm font-semibold text-grey">4/5</span>
                </div>
             </div>
         )
    }
}
 
export default WeekCard;