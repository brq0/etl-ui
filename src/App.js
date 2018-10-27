import React, {Component} from 'react';
import Header from './Header.js'
import EtlButtonsPane from './EtlButtonsPane.js'
import Button from './Button.js'
import {Button as RSButton} from 'reactstrap';
import LoggingPane from './LoggingPane.js'
import DataPane from './DataPane.js'
import './App.css';
import $ from 'jquery';
import * as CONF from './conf/Conf.js'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            log: 'Logging'
        };

         this.handleLogging = this.handleLogging.bind(this);
    }

    handleLogging(e){
        this.setState({
            log: e
        })
    }

    handleEntireEtlProcess(e){
      console.log("etl")
    }

    loadDataFromDb(e){
      console.log("load data from db")
    }

    render() {
        return (
            <div className="App">
                    <Header />
                    <EtlButtonsPane handleLogging={this.handleLogging}/>
                    <div className="container">
                        <div className="row mt-5 mb-5">
                            <div className="offset-2 offset-md-3"></div>
                                <RSButton className="col-8 col-md-6" color="success" onClick={this.handleEntireEtlProcess}>ETL</RSButton>{''}
                            <div className="offset-2 offset-md-3"></div>
                        </div>

                        <div className="row mt-5 mb-5">
                        <div className="offset-2 offset-md-3"></div>
                            <RSButton className="col-4 col-md-3" color="success" onClick={this.loadDataFromDb}>LOAD DATA <br /> FROM DATABASE</RSButton>{''}
                            <RSButton className="col-4 col-md-3" color="success" onClick={this.loadDataFromDb}>Restart Database</RSButton>{''}
                            
                        <div className="offset-2 offset-md-3"></div>
                        </div>
                    
                    </div>
                    
                    <LoggingPane log={this.state.log}/>
                    <DataPane />
            </div>
        );
    }
}

export default App;
