import React from 'react';
import BrowserRouter from './BrowserRouter';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <BrowserRouter
          props = {this.props}
           />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
