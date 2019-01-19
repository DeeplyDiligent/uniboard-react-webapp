import React, { Component } from 'react';
import Attachments from './attachments/attachments';
import TodoApp from './todoList/todoList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import posed from 'react-pose';

const Box = posed.div({
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    })

class Sidebar extends Component {
    state = { isVisible : false, data: null}

    componentDidMount(){
        this.setState({isVisible:true})
        this.props.db.get().then((doc)=> {
            if (doc.exists) {
                this.setState({data: doc.data()});
                console.log("Document data:", doc.data());
            }
        });
    }

    render() {
        
        // console.log(this.db.collection('dba').doc('eGlJZRO3B
        console.log(this.props)
        const styles = {}   
        styles.sidebar = {right:0, zIndex:'1000', overflow:'scroll'}
        styles.sidebarBackground = {rgba:'(0,0,0,0)'}
        if(this.state.data){
            return (
                <div className="w-full h-full absolute" >
                <Link to='/home'> 
                    <div className="sidebarBackground h-full" style={styles.sidebarBackground}></div>
                </Link>
                <Box pose={this.state.isVisible ? 'visible' : 'hidden'} className="sidebarContent fixed bg-white max-w-sm rounded h-full shadow-lg px-8 py-4 sm:w-full lg:w-1/3 h-full" style={styles.sidebar}>                    
                        <Link to='/home'>
                        <div className="text-right pb-2 text-3xl">
                        <i className="fas fa-times"></i></div>
                        </Link>
                        <div className="text-2xl font-bold">{this.props.match.params.id}</div>
                        {/* <div className="text">{this.props.match.params.id}</div> */}
                        <div className="bg-red-light brow my-4"></div>
                        <div className = "text-md text-grey">Week name and topic (if applicable)</div>
                        <Attachments />
                        <hr/>
                        <TodoApp/>
                    </Box>
                </div>
                
            );
        }
        else {
            return(
                <div>
                    Waiting for data...
                </div>
            )
        }
    }
}
 
export default Sidebar;