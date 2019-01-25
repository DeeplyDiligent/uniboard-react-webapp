import React, { Component } from 'react';
import WeekCard from './weekCard';
class UnitBoard extends Component {
    shortenName(nameOfSubject){
        var matches = nameOfSubject.match(/\w{3}\d{4}/g);
        if (matches != null) {
            nameOfSubject = matches[0];
        }
        return nameOfSubject
    }
    render() { 
        const colorList = ['#ebb2fc','#fae0a4','#a4cdfc','#90eea9', 'blue-light']
        var borderColor = colorList[this.props.number]
        return ( 
        <div style={{minWidth:"250px", height:'calc(100% - 16px)' , overflow:'hidden', borderRadius:'6px', borderColor:borderColor}} 
            className='flex-1 max-w-sm overflow-hidden shadow-lg m-2 bg-white border-b-8' >
                <div className="flex justify-between content-center mt-2 px-6 py-4 bg-white" >
                    <div className="flex1">
                        <i class="text-2xl text-grey fab fa-flickr"></i>
                        <span className=" text-3xl font-semibold ml-4">{this.shortenName(this.props.unitName)}</span>
                    </div>
                    <div className="flex1">
                        <i class="text-xl text-grey-dark fas fa-ellipsis-v"></i>
                    </div>
                </div>
            <div className="px-4 py-2" style={ {overflowY: 'scroll', height: 'calc(100% - 66px)'}}>
                {Object.keys(this.props.database).map((i,j)=>{
                    if(i.includes('expandable_branch')){
                        return <WeekCard key={j} data={this.props.database[i]} unitName={this.shortenName(this.props.unitName)} id={i} />
                    }
                    return false;
                })}
            </div>
        </div> 
      );
    }
}
 //height: 'calc(100% - 32px)'
export default UnitBoard;