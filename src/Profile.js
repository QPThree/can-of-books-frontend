import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react';


class Profile extends React.Component {
  render() {
    console.log(this.props)
    return (

      <>
        <Card>
          <Card.Header>
            {this.props.auth0.user.name}
          </Card.Header>
          <Card.Body>
            
          </Card.Body>
          <Card.Footer>
            {this.props.auth0.user.email}
          </Card.Footer>
        </Card>

      </>
    );
  }
}

export default withAuth0(Profile);
