import React, {Component} from 'react';

const LoggingPane = (props) => {
        return (
            <div className="LoggingPane">
                {props.log}
            </div>
        );
    }

export default LoggingPane;
