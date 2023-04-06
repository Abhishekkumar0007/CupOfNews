import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";


export default class App extends Component {

  apiKey= process.env.REACT_APP_NEWS_API


  render() {
    return (

      <div>
        <Router>
          <Navbar />
          {/* <News pageSize={9} country="in" category="Science" /> */}
          <Switch>

            <Route exact path="/"><News key="General" apiKey={this.apiKey} pageSize={9} country="in" category="General" /></Route>
            <Route exact path="/Science"><News key="Science"apiKey={this.apiKey} pageSize={9} country="in" category="Science" /></Route>
            <Route exact path="/Business"><News key="Business" apiKey={this.apiKey}pageSize={9} country="in" category="Business" /></Route>
            <Route exact path="/Technology"><News key="Technology"apiKey={this.apiKey} pageSize={9} country="in" category="Technology" /></Route>
            <Route exact path="/Entertainment"><News key="Entertainment"apiKey={this.apiKey} pageSize={9} country="in" category="Entertainment" /></Route>
            <Route exact path="/Sports"><News key="Sports"apiKey={this.apiKey} pageSize={9} country="in" category="Sports" /></Route>
            <Route exact path="/Health"><News key="Health"apiKey={this.apiKey} pageSize={9} country="in" category="Health" /></Route>

          </Switch>
        </Router>
      </div>
    );
  }
}



