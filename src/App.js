import React, {Component} from 'react';
import axios from "axios/index";
import {Button as RSButton} from 'reactstrap';
import './css/App.css';
import Header from './components/Header.js';
import EtlButtonsPane from './components/EtlButtonsPane.js';
import LoggingPane from './components/LoggingPane.js';
import DataPane from './components/DataPane.js';
import * as CONF from './conf/Conf.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            log: 'Click something please',
            key: 0,
            dbData: []
        };

         this.handleLogging = this.handleLogging.bind(this);
         this.loadDataFromDb = this.loadDataFromDb.bind(this);
         this.restartDb = this.restartDb.bind(this);
    }

    handleLogging(e){
        this.setState({
            log: e
        });
    }

    loadDataFromDb(){
         axios.get(`${CONF.PAGE}/getData`)
              .then(({data}) => {
                  var lg = data.length > 0 ? "Successfully got data from database." :
                   "No data in database. Execute E-T-L process in the first place.";

                  this.setState({
                            dbData: data,
                            key: this.state.key+1,
                            log: lg
                          });
         })
         .catch(error => {
                     if(error.message === 'Network Error') alert("Run etlapp");
         });
    }

    restartDb(){
        console.log("restart")
        axios.get(`${CONF.PAGE}/restartDb`)
              .then(({data}) => {
                  this.setState({
                            dbData: [],
                            log: data,
                            key: 0
                          });
         })
         .catch(error => {
                     if(error.message === 'Network Error') alert("Run etlapp");
         });
    }

    render() {
        return (
            <div className="App">
                    <Header />
                    <EtlButtonsPane handleLogging={this.handleLogging}/>
                    <div className="ml-5 mr-5">
                        <div className="mb-5 col-centered">
                            <RSButton className="col-2" color="success" onClick={this.loadDataFromDb}>Load Data</RSButton>
                            <RSButton className="col-1 ml-1" color="danger" onClick={this.restartDb}>Restart DB</RSButton>
                        </div>
                    </div>
                    <hr/>
                    <LoggingPane log={this.state.log}/>
                    <hr/>
                    <DataPane data={this.state.dbData} key={this.state.key}/>
            </div>
        );
    }
}

export default App;
