import React, {Component} from 'react';
import Button from './Button.js'

class EtlButtonsPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="EtlButtonsPane">
                  <Button name="E" onClick={this.handleExtract} />
                  <Button name="T" onClick={this.handleTransfer} />
                  <Button name="L" onClick={this.handleLoad} />
            </div>
        );
    }
}

export default EtlButtonsPane;
