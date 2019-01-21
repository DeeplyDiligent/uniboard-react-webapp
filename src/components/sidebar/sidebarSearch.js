import React, { Component } from 'react';
import Attachments from './attachments/attachments';
import TodoApp from './todoList/todoList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './search'


class SidebarSearch extends Component {
    state = {  
        data : {}
    }

    constructor(props) {
        super(props);
        this.props.db.get().then(this.storeData);
      }
    
      storeData = (doc) => {
        if (doc.exists) {
          this.setState({ data: doc.data() });
        }
      }

    render() {
        const styles = {}
        styles.sidebar = {right:0, zIndex:'1000', overflow:'scroll', width:'-webkit-fill-available'}
        // Object.values(this.state.data).map(item=>console.log(Object.values(item)))
        return (
            <div className="w-full h-full absolute" >
               
                <div className="sidebarContent fixed bg-white max-w-sm rounded h-full shadow-lg px-8 py-4 sm:w-full lg:w-1/3 h-full" style={styles.sidebar} >
                    <Link to='/home'>
                    <div className="text-right pb-2 text-3xl">
                    <i className="fas fa-times"></i></div>
                    </Link>
                   <Search database={this.state.data}/>
                </div>
            </div>
            
        );
    }
}
 
export default SidebarSearch;