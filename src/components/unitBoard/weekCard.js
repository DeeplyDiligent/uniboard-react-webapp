import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class WeekCard extends Component {

constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
}

    handleClick(){
    
//this.context.history.push('/home/sidebar/kfc3241')
 }


    render() { 
         return (
             <Link to='/home/sidebar/kfc3241' style={{textDecoration:'none'}}>
             <div style={{width: "100%", height: "99px"}}  
             className="flex border-2 rounded border-light-grey p-4 my-2"
             >
                 <div>
                 <div className="brow bg-red-light mb-1"></div>
            
                 <div className="text-black font-semibold text-lg">Week X</div>
                 </div>
                 <div style={{width:"fit-content",marginLeft:"auto",marginRight:"0px"}} className="self-end">
                        <span className="px-3 py-1 text-sm font-semibold text-grey">Tasks: 6</span>
                        <span className="px-3 py-1 text-sm font-semibold text-grey">4/5</span>
                </div>
             </div>
             </Link>
         )
    }
}
 
export default WeekCard;