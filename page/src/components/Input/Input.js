import React, { Component } from 'react';
import './Input.scss'


class Input extends Component {
    render() {
        return (
            <input  type="text" placeholder={this.props.placeholder}  className={"input " + this.props.className} />
        )
    }
}
export default Input;
