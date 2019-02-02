import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchPanel from './searchPanel';


class SidebarSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {}
        styles.sidebar = {right:0, zIndex:'1000', overflow:'scroll', width:'-webkit-fill-available'}
        // Object.values(this.state.data).map(item=>console.log(Object.values(item)))
        return (
            <div className="w-full h-full absolute" >
                <div className="sidebarContent fixed bg-white max-w-sm rounded h-full shadow-lg px-8 py-4 w-full lg:w-1/3 h-full" style={styles.sidebar} >
                    <Link to='/home'>
                        <div className="text-right pb-2 text-3xl">
                            <i className="fas fa-times"></i>
                        </div>
                    </Link>
                   <SearchPanel data={this.props.db}/>
                </div>
            </div>
            
        );
    }
}
 
export default SidebarSearch;