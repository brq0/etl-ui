import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Data from './DataPane'

class ModalPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Data tog = {this.toggle}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>kup</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Wyjście</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalPopUp;