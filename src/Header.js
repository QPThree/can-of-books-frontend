import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return(
      <Navbar className="navbar justify-content-between">
        <Navbar.Brand><h1>Book-Self</h1></Navbar.Brand>
        <Link to="/"><span className="headerlink">Home</span></Link>
        {this.props.loggedIn ?
        <Link to="/profile"><span className="headerlink">Profile</span></Link> : 
        ''}
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {this.props.loggedIn ?
        <LogoutButton>Logout</LogoutButton> : 
        ''}
      </Navbar>
    );
  }
}

export default Header;
