import React, {Component} from 'react';
import Header from './Header.js'
import EtlButtonsPane from './EtlButtonsPane.js'
import Button from './Button.js'
import {Button as RSButton} from 'reactstrap';
import LoggingPane from './LoggingPane.js'
import DataPane from './DataPane.js'
import './App.css';

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
                    <div className="ml-5 mr-5">
                        <div className="mt-5 mb-3">
                                <RSButton className="col-4" color="primary" onClick={this.handleEntireEtlProcess}>ETL</RSButton>
                        </div>
                        <div className="mb-5">
                            <RSButton className="col-2 ml-1" color="success" onClick={this.loadDataFromDb}>LOAD DATA</RSButton>
                            <RSButton className="col-2 ml-1" color="danger" onClick={this.loadDataFromDb}>Restart Database</RSButton>
                        </div>
                    </div>
                    <LoggingPane log={this.state.log}/>
                    <DataPane />
            </div>
        );
    }
}

export default App;
