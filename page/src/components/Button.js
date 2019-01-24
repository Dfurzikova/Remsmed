import React, { Component } from 'react';
import './Button.scss'
import '../fonts/fonts.scss'

class Button extends Component {

    render() {
        return (
            <button className={"button " + this.props.className} > {this.props.name} </button>
        )
    }
}
export default Button;
