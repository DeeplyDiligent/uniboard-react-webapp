import React, { Component } from 'react';

class TodoHeader extends React.Component {
    constructor (props){
        super(props)
        // this.state = {todoItems: todoItems};
    }
  render () {
    var counter = this.props.items.filter((donecheck)=>!donecheck.done)
    return (<div className='mt-10 mb-5 flex'> 
     <div className='w-4/5'>
    <i className="fas fa-clipboard-list"></i>
    <a className=' font-bold ml-3'>TO DO LIST</a>
    </div> 
    <div className=' w-1/5 text-right'>
    <a >{counter.length}</a>
    </div>
    </div>);
  }
}

export default TodoHeader