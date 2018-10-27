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
                    <div>
                        <Button name="ETL" onClick={this.handleEntireEtlProcess}/>
                        <RSButton color="success">ETL</RSButton>{' '}
                        <Button name="LOAD DATA FROM DATABASE" onClick={this.loadDataFromDb}/>
                    </div>
                    <LoggingPane log={this.state.log}/>
                    <DataPane />
            </div>
        );
    }
}

export default App;
