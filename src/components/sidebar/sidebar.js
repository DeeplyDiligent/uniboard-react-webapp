import React, { Component } from 'react';
class Sidebar extends Component {
    state = {  }

    render() {
        const styles = {}
        styles.sidebar = {right:0, width:"33%",height:"100%"}
        return (
            <div className="absolute bg-white max-w-sm rounded overflow-hidden shadow-lg px-4 py-4" style={styles.sidebar}>
                <div className="text">{this.props.match.params.id}</div>
                <div class="brow"></div>
                <div className="text-black">UnitName</div>
            </div>
        );
    }
}
 
export default Sidebar;