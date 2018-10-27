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
            <div className="EtlButtonsPane">
                  <Button name="E" onClick={this.handleExtract} />
                  <Button name="T" onClick={this.handleTransfer} />
                  <Button name="L" onClick={this.handleLoad} />
            </div>
        );
    }
}

export default EtlButtonsPane;
