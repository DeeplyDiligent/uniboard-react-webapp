import React, { Component } from 'react';

class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
      this.onClickClose2 = this.onClickClose2.bind(this);
    }
   
   
    onSubmit(event) {
      event.preventDefault();
      var newItemValue = this.refs.itemName.value;
      
      if(newItemValue) {
        this.props.addItem({newItemValue});
        this.refs.form.reset();
      }
    }
    onClickClose2() {
      this.props.removeItemAll()
    }
  
    render () {
      //   console.log(completedIndex.map(item => item.index))
  
      return (
          <div className='flex'>
        <form ref="form" onSubmit={this.onSubmit} className="form-inline w-3/5 flex">
          <button type="submit" className="btn btn-default fa fa-plus-circle w-1/6"></button> 
          <input type="text" ref="itemName" className="form pl-1 pr-1 w-5/6" placeholder="Add new task item..."/>
        </form>
        <button type="" className="btn btn-default w-2/5 text-white bg-black rounded-full" onClick={this.onClickClose2}>Clear Completed</button> 
        <hr style={{borderWidth:'1px'}}/>
        </div>
      );   
    }
  }

  export default TodoForm