import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal from './BookFormModal';
import { CardColumns } from 'react-bootstrap';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      renderBooks: false,
      renderForm: false,
    }
  }
  componentDidMount = async () => {
    try {
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
    } catch (err) {
      console.log(err.response);
    }
  }

  showForm = () => {
    this.setState({
      renderForm: true,
    });
  }

  closeForm = () => {
    this.setState({
      renderForm: false,
    });
  }

  handleCreateBook = async (bookInfo) => {
    try {
      let response = await axios.post('http://localhost:3001/books', bookInfo);
      this.setState({
        books: [...this.state.books, response.data],
      })
    } catch (err) {
      console.log('Error creating a new book on front end:', err);
    }
  }

  handleDelete = async (id, email) => {
    try {
      if (email === this.props.auth0.user.email) {
        console.log(`email: ${email}, props.auth0.user.email: ${this.props.auth0.user.email}`);
        await axios.delete(`http://localhost:3001/books/${id}`);
        let updatedBooks = this.state.books.filter(book => book._id !== id);
        this.setState({
          books: updatedBooks
        });
      }
    } catch (err) {
      console.log('Error on front end trying to delete:', err);
    }
  }
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <h3>
            This is a collection of my favorite books
          </h3>
          <Button variant="primary" onClick={this.showForm}>Add Book</Button>
        {this.state.renderForm ?
          <BookFormModal
            renderForm={this.state.renderForm}
            closeForm={this.closeForm}
            handleCreateBook={this.handleCreateBook}
            userEmail={this.props.auth0.user.email} />

          : ''}
        </Jumbotron>
        <CardColumns>
          {this.state.books.length > 0 ?
            this.state.books.map(book => (
              <Card key={book._id}>
                <Card.Header>
                  <h2>{book.title}</h2>
                </Card.Header>
                <Card.Body>
                  <p>{book.description}</p>
                </Card.Body>
                <Card.Footer>
                  <h4>{book.status}</h4>
                  <Button variant="outline-danger" onClick={() => this.handleDelete(book._id, book.email)}>Delete</Button>
                </Card.Footer>
              </Card>
            ))
            : ''}
        </CardColumns>
        
      </Container>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
