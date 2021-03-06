import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default class MyProjects extends Component {

  state ={
    modalShow: false
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
            {this.props.data.name} | <a href={this.props.data.github} target="_blank" rel="noopener noreferrer">GitHub</a> | <a href={this.props.data.planning} target="_blank" rel="noopener noreferrer">Planning Document</a> | <a href={this.props.data.video} target="_blank" rel="noopener noreferrer">Demo</a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe title={this.props.data.name} className="iframe-video" src={this.props.data.video} frameBorder="0" allowFullScreen></iframe>
          <h4>{this.props.data["tech-used"]}</h4>
          <p>
            {this.props.data.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          {this.props.data.partner ? (
            <h6>Partner: <a href={this.props.data.partnerGitHub} target="_blank" rel="noopener noreferrer">{this.props.data.partner}</a> | Created: {this.props.data["date-created"]}</h6>
          ) : null}
          <Button className="project-button" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    return (
      <ButtonToolbar>
        <Button className="project-button" variant="primary" onClick={() => this.setState({modalShow: true})}>
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
