import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return(
      <Navbar className = "justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        {this.props.loggedIn ?
        <Link to="/profile">Profile</Link> : 
        ''}
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {this.props.loggedIn ?
        <LogoutButton>Profile</LogoutButton> : 
        ''}
      </Navbar>
    );
  }
}

export default Header;
