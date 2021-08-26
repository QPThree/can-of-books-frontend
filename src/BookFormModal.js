import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class BookFormModal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;
    let status = e.target.status.value;
    let email = this.props.userEmail;
    this.props.handleCreateBook({ title, description, email, status });
    this.closeForm();
  }
  closeForm = () => {
    this.props.closeForm();
  }
  render() {
    return (
      <Modal show={this.props.renderForm}>
        <Modal.Header>
          <h2>Add New Book</h2>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button variant="success" type="submit" className="m-1">
              Submit
            </Button >
            <Button variant="outline-danger" className="m-1" onClick={this.closeForm}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}


export default BookFormModal;
