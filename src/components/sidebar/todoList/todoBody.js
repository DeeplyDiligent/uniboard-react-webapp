import React, { Component } from 'react';

class TodoList extends React.Component {
    render () {
      var items = this.props.items.map((item, index) => {
        return (
          <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        );
      });
      return (
        <div className="list-group"> {items} </div>
      );
    }
  }
    
  class TodoListItem extends React.Component {
    constructor(props) {
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone() {
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }
    render () {
      var todoStyle = this.props.item.done ? 
          {textDecoration : 'line-through' } : {textDecoration : 'none'};
      todoStyle.wordBreak = "break-all";
      var todoIcon = this.props.item.done ? 
          'fa fa-check-circle' : 'far fa-circle';
      // var todoClass = this.props.item.done ? 
      //     "done" : "undone";
      return(
          <React.Fragment>
        <div className="list-group-item flex">
          {/* <div className={todoClass}> */}
          
            {/* <i className=" close fa fa-times" onClick={this.onClickClose}></i> */}
  
            <a className='w-3/5 todotext ml-3' style={todoStyle}>{this.props.item.value}</a>
            <div className=' w-1/5 text-right'> 
            <i className={todoIcon} aria-hidden="true" onClick={this.onClickDone}></i>
            </div>
            {/* <button type="button" className="close" onClick={this.onClickClose}></button> */}
          </div>
          <hr style={{borderWidth:'1px'}}/>
          </React.Fragment>
            
           );
    }
  }

export default TodoList