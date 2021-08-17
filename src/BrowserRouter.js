import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import IsLoadingAndError from './IsLoadingAndError';
import {
  Switch,
  Route,
} from "react-router-dom";
import BestBooks from './BestBooks';
import LogoutButton from './LogoutButton';
import Login from './Login';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';

class BrowserRouter extends React.Component {
  render() {
    // console.log('browserroute:', this.props);
    return (
      <IsLoadingAndError>
        <Header
          loggedIn={this.props.props.auth0.isAuthenticated} />
        <Switch>
          <Route exact path="/">
            {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            {this.props.props.auth0.isAuthenticated ?
              
              <BestBooks />
              : 
              <Login
              props = {this.props.props}
              makeRequest = {this.props.makeRequest}
              />}
          </Route>
          {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </IsLoadingAndError>
    )
  }
}

export default withAuth0(BrowserRouter);
