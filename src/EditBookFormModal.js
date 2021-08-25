import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class EditBookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.book._id,
      title: this.props.book.title,
      description: this.props.book.description,
      status: this.props.book.status,
      email: this.props.userEmail,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state);
    this.closeForm();
  }
  handleTitle = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  }
  handleDescription = (e) => {
    e.preventDefault();
    this.setState({
      description: e.target.value,
    });
  }
  handleStatus = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  }
  closeForm = () => {
    this.props.closeEditForm();
  }
  render() {
    return (
      
        
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" onChange={this.handleTitle} value={this.state.title}/>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" onChange={this.handleDescription} value={this.state.description} />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" onChange={this.handleStatus} value={this.state.status} />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button >
          </Form>
        </Modal.Body>
    )
  }
}


export default EditBookFormModal;
