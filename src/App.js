import React, {Component} from 'react';
import Header from './Header.js'
import EtlButtonsPane from './EtlButtonsPane.js'
import Button from './Button.js'
import axios from "axios/index";
import {Button as RSButton} from 'reactstrap';
import LoggingPane from './LoggingPane.js'
import DataPane from './DataPane.js'
import * as CONF from './conf/Conf.js'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            log: 'Logging',
            key: 0,
            dbData: []
        };

         this.handleLogging = this.handleLogging.bind(this);
         this.loadDataFromDb = this.loadDataFromDb.bind(this);
    }

    handleLogging(e){
        this.setState({
            log: e
        })
    }

    handleEntireEtlProcess(e){
      console.log("etl")
    }

    loadDataFromDb(){
         axios.get(`${CONF.PAGE}/getData`)
              .then(({data}) => {
              console.log(this.state.key)
                  this.setState({
                            dbData: data,
                            key: this.state.key+1
                          })
         })
         .catch(error => {
                     if(error.message === 'Network Error') alert("Run etlapp")
         });
    }

    render() {
        return (
            <div className="App">
                    <Header />
                    <EtlButtonsPane handleLogging={this.handleLogging}/>
                    <div className="ml-5 mr-5">
                        <div className="mt-5 mb-3 col-centered">
                                <RSButton className="col-3" color="primary" onClick={this.handleEntireEtlProcess}>ETL</RSButton>
                        </div>
                        <div className="mb-5 col-centered">
                            <RSButton className="col-2" color="success" onClick={this.loadDataFromDb}>Load Data</RSButton>
                            <RSButton className="col-1 ml-1" color="danger" onClick={this.loadDataFromDb}>Restart DB</RSButton>
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
