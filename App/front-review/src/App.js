import React, { Component } from 'react';
import frontEnd from './components/common/constDefinitions';
import HeaderComponent from './components/structure/HeaderComponent';
import getEntries from './components/common/dataStructure/getEntries';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {HtmlComponent, HomeComponent} from './components/structure/index';
import ErrorBoundary from './components/common/error/ErrorBoundary';
import './App.scss';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      display: 'default',
    };
  }

  render() {
    return (
      <Router>

        <div className="main-container">

          <HeaderComponent options={getEntries(frontEnd)}/>
          <section className="left-side" />


          <ErrorBoundary>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/HTML5" component={HtmlComponent} />
            <Route path="/ReactJs" component={HomeComponent} />
            <Route path="/JS" component={HomeComponent} />
            <Route path="/CSS3" component={HomeComponent} />
          </ErrorBoundary>


          <section className="right-side" />
          <div className="fit-space" />

          <footer className="footer-main">
            <small>Footer All rights reserved.</small>
          </footer>

        </div>

      </Router>
    );
  }
}

export default App;
