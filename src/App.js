import React, {Component} from 'react';
import Header from './Header.js'
import EtlButtonsPane from './EtlButtonsPane.js'
import Button from './Button.js'
import LoggingPane from './LoggingPane.js'
import DataPane from './DataPane.js'
import './App.css';
import $ from 'jquery';
import * as CONF from './conf/Conf.js'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleExtract(e){
      console.log("extract")
    }

    handleTransfer(e){
      console.log("transfer")
    }

    handleLoad(e){
      console.log("load")
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
                    <EtlButtonsPane />
                    <div>
                        <Button name="ETL" onClick={this.handleEntireEtlProcess}/>
                        <Button name="LOAD DATA FROM DATABASE" onClick={this.loadDataFromDb}/>
                    </div>
                    <LoggingPane />
                    <DataPane />
            </div>
        );
    }
}

export default App;
