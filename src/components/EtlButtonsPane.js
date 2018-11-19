import React, {Component} from 'react';
import axios from "axios/index";
import {Button as RSButton} from 'reactstrap';
import $ from 'jquery';
import * as CONF from '../conf/Conf.js';
import '../css/App.css';
import '../css/popUp.css';

let extractInt = null;
let transformInt = null;
let loadInt = null;
let etlInt = null;

class EtlButtonsPane extends Component {
    constructor(props) {
        super(props);

        this.handleExtract = this.handleExtract.bind(this);
        this.handleTransform = this.handleTransform.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.handleEntireEtlProcess = this.handleEntireEtlProcess.bind(this);
    }

    handleExtract(e){
       this.sendRequest("extract");
    }

    handleTransform(e){
      this.sendRequest("transform");
    }

    handleLoad(e){
      this.sendRequest("load");
    }

    handleEntireEtlProcess(e){
      this.sendRequest("etl");
    }

    sendRequest(command){
     axios.get(`${CONF.PAGE}/${command}`)
          .then(({data}) => {
            switch(data){
                case "Data is being extracted..":
                    if(extractInt == null){
                        extractInt = setInterval(() => {this.handleExtract()}, 300);
                    }
                    $("#popup").show();
                    break;
                case "Data is being transformed..":
                    if(transformInt == null){
                        transformInt = setInterval(() => {this.handleTransform()}, 300);
                    }
                    $("#popup").show();
                    break;
                case "Data is being loaded..":
                    if(loadInt == null){
                        loadInt = setInterval(() => {this.handleLoad()}, 300);
                    }
                    $("#popup").show();
                    break;
                case "Full ETL Process is running.. Please wait..":
                    if(etlInt == null){
                        etlInt = setInterval(() => {this.handleEntireEtlProcess()}, 300);
                    }
                     $("#popup").show();
                     break;

                default:
                     $("#popup").hide();
                     clearInterval(extractInt);
                     clearInterval(transformInt);
                     clearInterval(loadInt);
                     clearInterval(etlInt);
                     extractInt = null;
                     transformInt = null;
                     loadInt = null;
                     etlInt = null;
                     break;
            }

           {this.props.handleLogging(data)}
     })
     .catch(error => {
            if(error.message === 'Network Error') alert("Run etlapp");
            clearInterval(extractInt);
            clearInterval(transformInt);
            clearInterval(loadInt);
            clearInterval(etlInt);
     });
    }

    render() {
        return (
            <div className="EtlButtonsPane">

               <div className="col-md-9 mt-5 col-centered">
                  <RSButton className="col-1" outline color="warning" onClick={this.handleExtract}>E</RSButton>
                  <RSButton className="col-1 ml-4" outline color="danger" onClick={this.handleTransform}>T</RSButton>
                  <RSButton on className="col-1 ml-4" outline color="info" onClick={this.handleLoad}>L</RSButton>
               </div>

               <div className="ml-5 mr-5">
                <div className="mt-5 mb-3 col-centered">
                    <RSButton className="col-3" color="primary" onClick={this.handleEntireEtlProcess}>ETL</RSButton>
                </div>
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
