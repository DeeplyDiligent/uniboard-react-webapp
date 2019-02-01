import React, { Component } from 'react';
import Attachment from './attachment';

class Attachments extends Component {

    state = {}
    
    render() { 
        return (
            <React.Fragment>
                <div className="my-10 inline-flex text-lg w-full">
                    <i className="fas fa-paperclip"></i>
                    <div className="px-3 font-bold">{this.props.heading}</div>
                    <div className="w-full text-right">5</div>
                </div>
                {this.props.attachments.map((attachment, i) =>{
                    return <Attachment key={i} name={attachment.name} url={attachment.url}/>
                })}
            </React.Fragment>
        );
    }
}
 
export default Attachments;