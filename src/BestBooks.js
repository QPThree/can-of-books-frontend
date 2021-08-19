import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      renderBooks: false,
    }
  }
  componentDidMount = async () => {
    try{
    console.log('app.js makeRequest:', this.props.auth0)
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
    };

    const serverResponse = await axios.get('http://localhost:3001/books', config);

    this.setState({
      books: serverResponse.data,
      renderBooks: true,
    })
  } catch (err){
    console.log(err.response);
  }
  }
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books

          </p>
          <button onClick={this.makeRequest} >Click me to test </button>
        </Jumbotron>

        {this.state.books.length > 0 ?
          <Carousel>
            <Carousel.Item>
              <Card>
                <Card.Header>
                  <h2>{this.state.books[0].title}</h2>
                </Card.Header>
                <Card.Body>
                  <p>{this.state.books[0].description}</p>
                </Card.Body>
                <Card.Footer>
                  <h4>{this.state.books[0].status}</h4>
                </Card.Footer>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
            <Card>
                <Card.Header>
                  <h2>{this.state.books[1].title}</h2>
                </Card.Header>
                <Card.Body>
                  <p>{this.state.books[1].description}</p>
                </Card.Body>
                <Card.Footer>
                  <h4>{this.state.books[1].status}</h4>
                </Card.Footer>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
            <Card>
                <Card.Header>
                  <h2>{this.state.books[2].title}</h2>
                </Card.Header>
                <Card.Body>
                  <p>{this.state.books[2].description}</p>
                </Card.Body>
                <Card.Footer>
                  <h4>{this.state.books[2].status}</h4>
                </Card.Footer>
              </Card>
            </Carousel.Item>
          </Carousel> : ''}
      </Container>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
