import React, { Component } from "react";
import Home from "./components/home";
import Navbar from "./components/nav/navbar";
import Sidebar from "./components/sidebar/sidebar";
import SidebarSearch from "./components/sidebarSearch/sidebarSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetTheExtension from "./components/getTheExtension";
import database from "./data";
import About from "./components/about";

class App extends Component {
  state = { loading: true, notFound: false };
  constructor(props) {
    super(props);
    database.createRealtimeDataDictFromDatabaseId(this.props.uid).then(db => {
      db.onUpdate(
        data => {
          this.setState({ data: data, loading: false });
        },
        () => {
          this.setState({ notFound: true, loading: false });
        }
      );
    });
  }
  render() {
    if (this.state.data) {
      console.log(this.state.data);
      return (
        <Router>
          <div className="App flex flex-col">
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
            <Switch>
              <Route exact path="/about" render={() => <About />} />
              <Route render={(props) => <Home data={this.state.data} {...props} />} />
            </Switch>
          </div>
        </Router>
      );
    } else if (this.state.loading) {
      return <div className="loader text-5xl">Loading...</div>;
    } else if (this.state.notFound) {
      return <GetTheExtension />;
    } else {
      return false;
    }
  }
}

export default App;
