import React, { Component } from 'react';
import WeekCard from './weekCard';
class UnitBoard extends Component {
    constructor(){
        super();
    }
    shortenName(nameOfSubject){
        var matches = nameOfSubject.match(/\w{3}\d{4}/g);
        if (matches != null) {
            nameOfSubject = matches[0];
        }
        return nameOfSubject
    }
    render() { 
      Object.values(this.props.db).map((item)=> console.log(item.text) )
    //  console.log(Object.values(this.props.db))
    //    Object.values(this.props.db).map((item)=> console.log(item.img) )
        const colorList = ['#ebb2fc','#fae0a4','#a4cdfc','#90eea9', 'blue-light']
        var borderColor = colorList[this.props.number]
        return ( <div style={{minWidth:"250px", height:'calc(100% - 16px)' , overflow:'hidden', borderRadius:'1rem', borderColor:borderColor}} 
        className={'flex-1 max-w-sm overflow-hidden shadow-lg m-2 bg-white border-b-4'} >
        <div className="px-6 py-4 bg-white shadow" >
        <div className='flex'> 
        <i className="fas fa-graduation-cap mt-2"></i>
          <div className=" text-3xl ml-4">{this.shortenName(this.props.unitName)}</div>
          </div>
        </div>
        <div className="px-4 py-2" style={ {overflowY: 'scroll', height: 'calc(100% - 66px)'}}>
            {Array(10).fill(1).map((i,j)=><WeekCard key={j} />)}
        </div>
      </div> );
    }
}
 //height: 'calc(100% - 32px)'
export default UnitBoard;