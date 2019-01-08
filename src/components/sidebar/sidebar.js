import React, { Component } from 'react';
import Attachments from './attachments/attachments';
import TodoApp from './todoList/todoList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Sidebar extends Component {
    state = {  }

    render() {
        const styles = {}
        styles.sidebar = {right:0, zIndex:'1000', overflow:'scroll'}
        return (
            <div className="fixed bg-white max-w-sm rounded overflow-hidden shadow-lg px-8 py-4 sm:w-full lg:w-1/3 h-full" style={styles.sidebar}>
                <Link to='/home'><div className="text-right pb-2 text-3xl"><i className="fas fa-times"></i></div></Link>
                <div className="text-2xl font-bold">Unit Name</div>
                {/* <div className="text">{this.props.match.params.id}</div> */}
                <div className="bg-red-light brow my-4"></div>
                <div className = "text-md text-grey">Week name and topic (if applicable)</div>
                <Attachments />
                <hr/>
                <TodoApp/>
            </div>
        );
    }
}
 
export default Sidebar;