import React, {Component} from 'react';

const Button = (props) => {
  return <div className="button">
            <button onClick={props.onClick}>{props.name}</button>
        </div>
}

export default Button
