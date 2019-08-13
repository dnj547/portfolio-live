import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


export default class MyProjects extends Component {

  state ={
    modalShow: false,
  }

  MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.data.name} | <a href={this.props.data.github}>GitHub</a> | <a href={this.props.data.planning}>Plans</a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{this.props.data["tech-used"]}</h4>
          <p>
            {this.props.data.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <h6>Partner: <a href={this.props.data.partnerGithub}>{this.props.data.partner}</a> | Created: {this.props.data["date-created"]}</h6>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    return (
      <ButtonToolbar>
        <Button variant="primary" onClick={() => this.setState({modalShow: true})}>
          {this.props.data.name}
        </Button>

        <this.MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={() => this.setState({modalShow: false})}
        />
      </ButtonToolbar>
    );
  }
}
