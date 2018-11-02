import React, {Component} from 'react';
import axios from "axios/index";
import Button from './Button.js'
import {Button as RSButton} from 'reactstrap';
import $ from 'jquery';
import * as CONF from './conf/Conf.js';
import './App.css';
import './css/popUp.css'


let extractInt = null;
let transformInt = null;
let loadInt = null;

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
       extractInt = setInterval(() => {this.sendRequest("extract")}, 300);
    }

    handleTransform(e){
      console.log("transform")
      transformInt = setInterval(() => {this.sendRequest("transform")}, 300);
    }

    handleLoad(e){
      console.log("load")
      loadInt = setInterval(() => {this.sendRequest("load")}, 300);
    }

    sendRequest(command){
    console.log(command)
     axios.get(`${CONF.PAGE}/${command}`)
          .then(({data}) => {
            switch(data){
                case "Data is being extracted..":
                case "Data is being transformed..":
                case "Data is being loaded..":
                     $("#popup").show();
                     break;

                default:
                     $("#popup").hide();
                     clearInterval(extractInt);
                     clearInterval(transformInt);
                     clearInterval(loadInt);
                     break;
            }

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
                  <RSButton className="col-1" outline color="warning" onClick={this.handleExtract}>E</RSButton>
                  <RSButton className="col-1 ml-4" outline color="danger" onClick={this.handleTransform}>T</RSButton>
                  <RSButton className="col-1 ml-4" outline color="info" onClick={this.handleLoad}>L</RSButton>
                </div>

                <div id="popup" className="actionWindow">
                    <div className="actionWindow-content">
                        <div className="actionWindow-body">
                            <div id="wrapper">
                               <div className="profile-main-loader">
                                <div className="loader">
                                   <svg className="circular-loader"viewBox="25 25 50 50" >
                                    <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth="2" />
                                   </svg>
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default EtlButtonsPane;
