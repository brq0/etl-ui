import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class DescriptionPopUp extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        }
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isDescPopUpOpen} toggle={this.props.toggleDescPopUp}>
                    <ModalHeader toggle={this.props.toggleDescPopUp}>{this.props.gameItem.productName}</ModalHeader>
                    <ModalBody>
                        <Nav tabs>
                        <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                                         onClick={() => { this.toggle('2'); }}>Opis
                                 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                         onClick={() => { this.toggle('1'); }}> Szczegóły
                               </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <h2>Szczegóły tresc</h2>
                                        {this.props.gameItem.description}
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                            <Row>
                                    <Col sm="12">
                                        <h2>Opis tresc</h2>
                                        {this.props.gameItem.description}
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default DescriptionPopUp;