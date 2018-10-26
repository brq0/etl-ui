import React, {Component} from 'react';
import Button from './Button.js'
import './App.css';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleButtonClick(e){
      console.log("log")
    }

    render() {
        return (
            <div className="App">
                    <div id="logo">
                    </div>
                    <div id="etlButtons" >
                        <Button name="E" onClick={this.handleButtonClick}/>
                        <Button name="T" />
                        <Button name="L" />
                    </div>
                    <div>
                        <Button name="ETL" />
                        <Button name="LOAD DATA FROM DATABASE" />
                    </div>
                    <div id="logging">

                    </div>
                    <div id="data">

                    </div>
            </div>
        );
    }
}

export default App;
