import React, { Component } from "react";
class Attachment extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="flex text-lg w-full">
          <i class="fas fa-file-pdf" />
          <div className="px-3 font-bold">Document Name.pdf</div>
          <div className="text-right"><i class="fas fa-cloud-download-alt"></i></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Attachment;
