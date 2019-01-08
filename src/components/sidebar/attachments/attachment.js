import React, { Component } from "react";
class Attachment extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="flex text-lg w-full">
        <div className='w-4/5 flex'>
          <i className="fas fa-file-pdf" />
          <div className="px-3 font-bold">Document Name.pdf</div>
          </div>
          <div className=" w-1/5"><i className="fas fa-cloud-download-alt"></i></div>

        </div>
        <hr style={{borderWidth:'1px'}}/>
      </React.Fragment>
    );
  }
}

export default Attachment;
