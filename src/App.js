import React, { Component } from "react";
import Home from "./components/home";
import Navbar from "./components/nav/navbar";
import Sidebar from "./components/sidebar/sidebar";
// import firebase from 'firebase';
import SidebarSearch from "./components/sidebarSearch/sidebarSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = { databaseID: null };
  constructor(props) {
    super(props);
    this.databaseIdReference = this.props.db
      .collection("authidLinking")
      .doc(this.props.uid);
    if (this.props.match.params.id) {
      this.state.databaseID = this.props.match.params.id;
      this.databaseIdReference.set({
        databaseID: this.props.match.params.id
      });
    } else {
      this.databaseIdReference.get().then(doc => {
        let data = doc.data();
        if (data) {
          this.setState({ databaseID: data.databaseID });
        }
      });
    }
  }
  render() {
    if (this.state.databaseID) {
      console.log(this.state.databaseID, "is the database id");
      console.log(this.props.uid, "has been provided as the user id");
      this.userInfo = this.props.db
        .collection("dba")
        .doc(this.state.databaseID);
      return (
        <Router>
          <div className="App">
            <Route
              path="/home/sidebar/:id/:branchid"
              render={props => <Sidebar db={this.userInfo} {...props} />}
            />
            <Route
              path="/home/search"
              render={props => <SidebarSearch db={this.userInfo} {...props} />}
            />
            <Navbar loggedIn={true} />

            <div className="mainComponent">
              <Switch>
                <Route
                  path="/*"
                  render={props => <Home db={this.userInfo} {...props} />}
                />
              </Switch>
            </div>
          </div>
        </Router>
      );
    } else {
      return <div className="loader">Loading...</div>;
    }
  }
}

export default App;
