import React from 'react';
import BrowserRouter from './BrowserRouter';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class App extends React.Component {

  

  render() {
    console.log('app', this.props);
    return (
      <>
        <Router>
          <BrowserRouter />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
