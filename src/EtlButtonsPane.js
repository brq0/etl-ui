import React, {Component} from 'react';
import axios from "axios/index";
import Button from './Button.js'
import {Button as RSButton} from 'reactstrap';
import * as CONF from './conf/Conf.js'

class EtlButtonsPane extends Component {
    constructor(props) {
        super(props);

        this.handleExtract = this.handleExtract.bind(this);
        this.handleTransfer = this.handleTransfer.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    handleExtract(e){
       console.log("extract")
       axios.get(`${CONF.PAGE}/extract`)
             .then(({data}) => {
                  {this.props.handleLogging(data)}
       });
    }

    handleTransfer(e){
      console.log("transfer")
      axios.get(`${CONF.PAGE}/transfer`)
            .then(({data}) => {
                 {this.props.handleLogging(data)}
      });
    }

    handleLoad(e){
      console.log("load")
      axios.get(`${CONF.PAGE}/load`)
            .then(({data}) => {
                  {this.props.handleLogging(data)}
      });
    }

    render() {
        return (
            <div className="EtlButtonsPane container">
                <div className="row mt-5 mb-5">
                <div className="offset-2 offset-lg-4"></div>
                  <RSButton className="col-2 ml-4" outline color="success" onClick={this.handleExtract}>E</RSButton>{''}
                  <RSButton className="col-2 ml-4" outline color="danger" onClick={this.handleTransfer}>T</RSButton>{''}
                  <RSButton className="col-2 ml-4" outline color="warning" onClick={this.handleLoad}>L</RSButton>{''}
                  <div className="offset-2 offset-lg-4"></div>
                </div>
            </div>
        );
    }
}

export default EtlButtonsPane;
