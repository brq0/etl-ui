import React from 'react';

const LoggingPane = (props) => {
        return (
            <div className="LoggingPane">
                {props.log}
            </div>
        );
    }

export default LoggingPane;
