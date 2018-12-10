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
                <Modal size="lg" isOpen={this.props.isDescPopUpOpen} toggle={this.props.toggleDescPopUp}>
                    <ModalHeader toggle={this.props.toggleDescPopUp}><h2>{this.props.gameItem.name}</h2></ModalHeader>
                    <ModalBody>
                        <Nav tabs>
                        <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                                         onClick={() => { this.toggle('1'); }}>Szczegóły
                                 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                         onClick={() => { this.toggle('2'); }}> Opis
                               </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="5">
                                    <img className="pt-3 gameImg" src={this.props.gameItem.imgUrl} alt="gameBox"></img>
                                    </Col>
                                    <Col sm="offset-1"></Col>
                                    <Col className="pt-3" sm="6">
                                        <h3 className="pb-3">{this.props.gameItem.name}</h3>
                                        <h5>Category: {this.props.gameItem.category} </h5>
                                        <h5>Producer: {this.props.gameItem.producer} </h5>
                                        <h5>Relese Date: {this.props.gameItem.releaseDate} </h5>
                                        <h5>Position: {this.props.gameItem.position} </h5>
                                        <h5 className="pt-2 pegiImg">Pegi:</h5> <img src={this.props.gameItem.pegiUrl} alt="pegi"/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                            <Row>
                                    <Col sm="5">
                                    <img className="pt-3 gameImg" src={this.props.gameItem.imgUrl} alt="game img"></img>
                                    </Col>
                                    <Col sm="offset-1"></Col>
                                    <Col className="pt-3" sm="6">
                                        <h3>O grze:</h3>
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