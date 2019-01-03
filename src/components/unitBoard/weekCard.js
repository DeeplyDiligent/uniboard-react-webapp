import React, { Component } from 'react';
class WeekCard extends Component {
    render() { 
        return ( 
            <div className="py-2 max-w-md w-full lg:flex">
                <div className="min-w-full sm:invisible border-r border-b border-l border-grey-light  lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="text-black font-bold text-xl">Week X</div>
                    <p className="py-5 text-grey-darker text-base">Week Preview...</p>
                    <div style={{width:"fit-content",marginLeft:"auto",marginRight:"0px"}} className="content-end">
                        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">3/10 Tasks</span>
                        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">85%</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default WeekCard;