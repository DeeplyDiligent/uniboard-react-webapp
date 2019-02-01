import React, { Component } from "react";
class Attachment extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="flex text-lg w-full">
        <div className='w-4/5 flex'>
          <i className="fas fa-file-pdf" />
          <div className="px-3 font-bold">{this.props.name}</div>
          </div>
          <a className=" w-1/5" href={this.props.url} target="_blank"><i className="fas fa-cloud-download-alt"></i></a>

        </div>
        <hr style={{borderWidth:'1px'}}/>
      </React.Fragment>
    );
  }
}

export default Attachment;
