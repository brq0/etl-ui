import React, {Component} from 'react';
import axios from "axios/index";
import Button from './Button.js'
import {Button as RSButton} from 'reactstrap';
import * as CONF from './conf/Conf.js';
import Popup from "reactjs-popup";
import './App.css';


class EtlButtonsPane extends Component {
    constructor(props) {
        super(props);

        this.handleExtract = this.handleExtract.bind(this);
        this.handleTransform = this.handleTransform.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }

    handleExtract(e){
       console.log("extract")
       this.sendRequest("extract")
    }

    handleTransform(e){
      console.log("transform")
      this.sendRequest("transform")
    }

    handleLoad(e){
      console.log("load")
      this.sendRequest("load")
    }

    sendRequest(command){
     axios.get(`${CONF.PAGE}/${command}`)
          .then(({data}) => {
           {this.props.handleLogging(data)}
     })
     .catch(error => {
            if(error.message === 'Network Error') alert("Run etlapp")
     });
    }

    render() {
        return (
            <div className="EtlButtonsPane">
               <div className="col-md-9 mt-5 col-centered">
               <Popup
                    trigger={<RSButton className="col-1" outline color="warning" onClick={this.handleExtract}>E</RSButton>} modal >
                    

        <div className="content">
          Extracting data

        <div id="wrapper">
            <div class="profile-main-loader">
            <div class="loader">
                <svg class="circular-loader"viewBox="25 25 50 50" >
                <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2" />
                </svg>
            </div>
            </div>  
        </div>
        
        <div className="actions">
         
          
        </div>
        
      </div>
               
                    
                </Popup>
                  <RSButton className="col-1 ml-4" outline color="danger" onClick={this.handleTransform}>T</RSButton>
                  <RSButton className="col-1 ml-4" outline color="info" onClick={this.handleLoad}>L</RSButton>
                </div>
            </div>
        );
    }
}

export default EtlButtonsPane;
