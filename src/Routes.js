import React, { Component } from 'react';
// import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/nav/navbar'
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <div className="">
          {/* <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
        </div>
      </div>
      </Router>
    );
  }
}
export default App;