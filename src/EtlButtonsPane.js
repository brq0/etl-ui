import React, {Component} from 'react';
import axios from "axios/index";
import Button from './Button.js'
import * as CONF from './conf/Conf.js'

class EtlButtonsPane extends Component {
    constructor(props) {
        super(props);
    }

    handleExtract(e){
      console.log("extract")
       axios.get(`${CONF.PAGE}/extract`)
             .then(({data}) => {
                  console.log(data);
       });
    }

    handleTransfer(e){
      console.log("transfer")
      axios.get(`${CONF.PAGE}/transfer`)
                  .then(({data}) => {
                       console.log(data);
            });
    }

    handleLoad(e){
      console.log("load")
      axios.get(`${CONF.PAGE}/load`)
                  .then(({data}) => {
                       console.log(data);
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
