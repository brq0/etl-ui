import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
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
                                         onClick={() => { this.toggle('1'); }}>Details
                                 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                         onClick={() => { this.toggle('2'); }}>Description
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
                                        <h4 className="pb-3">{this.props.gameItem.name}</h4>
                                        <h5>Category: {this.props.gameItem.category} </h5>
                                        <h5>Price: {this.props.gameItem.price} </h5>
                                        <h5>Producer: {this.props.gameItem.producer} </h5>
                                        <h5>Release Date: {this.props.gameItem.releaseDate} </h5>
                                        <h5>Position: {this.props.gameItem.position} </h5>
                                        <h5 className="pt-2">Pegi:</h5> <img src={this.props.gameItem.pegiUrl} className="pegiImg" alt="pegi"/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                            <Row>
                                    <Col sm="5">
                                    <img className="pt-3 gameImg" src={this.props.gameItem.imgUrl} alt="gameImg"></img>
                                    </Col>
                                    <Col sm="offset-1"></Col>
                                    <Col className="pt-3" sm="6">
                                        <h4>About game:</h4>
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