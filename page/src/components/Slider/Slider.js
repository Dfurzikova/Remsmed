import React, { Component } from 'react';
import './Slider.scss'

class Slider extends Component {

    render() {
        return (
            <span className="slider">
                <span className="slider__line active"></span>
                <span className="slider__line"></span>
            </span>
        )
    }
}
export default Slider;
