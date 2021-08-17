import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class Login extends React.Component {
  
  render() {
    console.log('loginjs props:',this.props)
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
          <Card.Footer>
            <LoginButton
            makeRequest = {this.props.makeRequest}/>
            
          </Card.Footer>
        </Card.Body>
      </Card>
    )
  }
}

export default withAuth0(Login);
