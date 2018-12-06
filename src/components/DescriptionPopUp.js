import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DescriptionPopUp = (props) => {
        return (
            <div>
                    <Modal isOpen={props.isDescPopUpOpen} toggle={props.toggleDescPopUp}>
                        <ModalHeader toggle={props.toggleDescPopUp}>{props.gameItem.productName}</ModalHeader>
                        <ModalBody>
                            {props.gameItem.description}
                        </ModalBody>
                    </Modal>            
             </div>
        );
}

export default DescriptionPopUp;