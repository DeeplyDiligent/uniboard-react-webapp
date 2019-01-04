import React, { Component } from 'react';
import Attachment from './attachment';
class Attachments extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="my-10 inline-flex text-lg w-full">
                    <i class="fas fa-paperclip"></i>
                    <div className="px-3 font-bold">ATTACHMENTS</div>
                    <div className="w-full text-right">5</div>
                </div>
                {Array(5).fill(1).map((i,j)=><Attachment key={j}/>)}
            </React.Fragment>
        );
    }
}
 
export default Attachments;