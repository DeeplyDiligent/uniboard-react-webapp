import React, { Component } from "react";
import * as firebase from "firebase/app";
class GetTheExtension extends Component {
  state = {};
  logout = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <div className="center-on-page">
        <h3>
          Hi there! If you're new here, you can get the extension at the link
          below. Otherwise, you may have logged into the wrong account.
        </h3>
        <button
          onClick={this.logout}
          className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 my-2 rounded"
        >
          Logout
        </button>
        &emsp;
        <a href="https://chrome.google.com/webstore/detail/synopsis-your-moodle-hero/ikffeebmjnccffbijpcnlhadgdebadmc">
          <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 my-2 rounded">
            Get The Extension
          </button>
        </a>
      </div>
    );
  }
}

export default GetTheExtension;
