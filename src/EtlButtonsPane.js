import React, {Component} from 'react';
import axios from "axios/index";
import Button from './Button.js'
import {Button as RSButton} from 'reactstrap';
import * as CONF from './conf/Conf.js'
import './App.css';

class EtlButtonsPane extends Component {
    constructor(props) {
        super(props);

        this.handleExtract = this.handleExtract.bind(this);
        this.handleTransfer = this.handleTransfer.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }

    handleExtract(e){
       console.log("extract")
       this.sendRequest("extract")
    }

    handleTransfer(e){
      console.log("transfer")
      this.sendRequest("transfer")
    }

    handleLoad(e){
      console.log("load")
      this.sendRequest("load")
    }

    sendRequest(command){
     axios.get(`${CONF.PAGE}/${command}`)
          .then(({data}) => {
                      {this.props.handleLogging(data)}
     });
    }

    render() {
        return (
            <div className="EtlButtonsPane">
                <div className="mt-5">
                  <RSButton className="col-1 cmt" outline color="warning" onClick={this.handleExtract}>E</RSButton>
                  <RSButton className="col-1 ml-4" outline color="danger" onClick={this.handleTransfer}>T</RSButton>
                  <RSButton className="col-1 ml-4" outline color="info" onClick={this.handleLoad}>L</RSButton>
                </div>
            </div>
        );
    }
}

export default EtlButtonsPane;
