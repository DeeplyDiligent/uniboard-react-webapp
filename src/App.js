import React, { Component } from "react";
import Home from "./components/home";
import Navbar from "./components/nav/navbar";
import Sidebar from "./components/sidebar/sidebar";
// import firebase from 'firebase';
import SidebarSearch from "./components/sidebarSearch/sidebarSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetTheExtension from "./components/getTheExtension";
import database from "./data";

class App extends Component {
  state = { database: "loading" };
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
    database.createDataDictFromDatabaseId(this.props.uid).then(x => {
      this.setState({ data: x });
    });
  }
  render() {
    if (this.state.data) {
      console.log(this.state.data);
      return (
        <Router>
          <div className="App">
            <Route
              path="/home/sidebar/:id/:branchid"
              render={props => <Sidebar data={this.state.data} {...props} />}
            />
            <Route
              path="/home/search"
              render={props => (
                <SidebarSearch db={this.state.data} {...props} />
              )}
            />
            <Navbar loggedIn={true} />

            <div className="mainComponent">
              <Switch>
                <Route
                  path="/*"
                  render={props => <Home data={this.state.data} {...props} />}
                />
              </Switch>
            </div>
          </div>
        </Router>
      );
    } /*else if (this.state.databaseID === "user not found") {
        return <GetTheExtension /> // TODO handle this case
    }*/ else {
      return <div className="loader">Loading...</div>;
    } /*else {
      return <GetTheExtension />;
    }*/
  }
}

export default App;
