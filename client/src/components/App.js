import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/styles.css'

import CityMainIndex from './CityMainIndex';
import PostClassified from './PostClassified';
import PostingDetails from './PostingDetails';
import Category from './Category';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="mainContainer">
            <Route exact path="/" component={CityMainIndex}/>
            <Route exact path="/c/:category/:id" component={Category} />
            <Route exact path="/l/:listing_id" component={PostingDetails} />
            <Route exact path="/post-listing" component={PostClassified} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
