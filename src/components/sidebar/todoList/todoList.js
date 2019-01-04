import React, { Component } from 'react';
import '../../../css/todoList.css';

/*
Todo app structure

TodoApp
	- TodoHeader
	- TodoList
    - TodoListItem #1
		- TodoListItem #2
		  ...
		- TodoListItem #N
	- TodoForm
*/
var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: false});
todoItems.push({index: 3, value: "buy flowers", done: false});

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
    var todoClass = this.props.item.done ? 
        {textDecoration : 'line-through' } : {textDecoration : 'none'};
    // var todoClass = this.props.item.done ? 
    //     "done" : "undone";
    return(
        <React.Fragment>
      <div className="list-group-item flex">
        {/* <div className={todoClass}> */}
        
          <i class=" close fa fa-times" onClick={this.onClickClose}></i>

          <a className='w-3/5 todotext ml-3' style={todoClass}>{this.props.item.value}</a>
          <i className=" fa fa-check-circle icon w-1/5 text-right" aria-hidden="true" onClick={this.onClickDone}></i>

          {/* <button type="button" className="close" onClick={this.onClickClose}></button> */}
        </div>
        <hr style={{borderWidth:'1px'}}/>
        </React.Fragment>
          
         );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
              <button type="submit" className="btn btn-default fa fa-plus-circle"></button> 
        <input type="text" ref="itemName" className="form-control ml-3" placeholder="Add new task item..."/>
        <hr style={{borderWidth:'1px'}}/>
      </form>
    );   
  }
}
  
class TodoHeader extends React.Component {
    constructor (props){
        super(props)
        this.state = {todoItems: todoItems};

    }
  render () {
      console.log(this.props.items.length)
      var counter = todoItems.filter((donecheck)=>!donecheck.done)
      console.log(counter.length)
    return (<div class='mt-10 mb-5 flex'> 
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
  
class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: todoItems};
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    return (
      <div id="todoApp">
        <TodoHeader items={todoItems}/>
        <TodoList items={todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoApp;