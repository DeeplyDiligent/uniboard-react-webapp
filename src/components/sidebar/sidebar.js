import React, { Component } from 'react';
import Attachments from './attachments/attachments';
import TodoApp from './todoList/todoList'

class Sidebar extends Component {
    state = {  }

    render() {
        const styles = {}
        styles.sidebar = {right:0, width:"40%",height:"100%"}
        return (
            <div className="absolute bg-white max-w-sm rounded overflow-hidden shadow-lg px-8 py-4" style={styles.sidebar}>
                <div className="text-right pb-2 text-3xl"><i className="fas fa-times"></i></div>
                <div className="text-2xl font-bold">Unit Name</div>
                {/* <div className="text">{this.props.match.params.id}</div> */}
                <div class="bg-red-light brow my-4"></div>
                <div class = "text-md text-grey">Week name and topic (if applicable)</div>
                <Attachments />
                <hr/>
                <TodoApp/>
            </div>
        );
    }
}
 
export default Sidebar;