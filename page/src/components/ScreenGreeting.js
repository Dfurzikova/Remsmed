import React, { Component } from 'react';
import Header from './Header'
import Greeting from './Greeting'
import './ScreenGreeting.scss'
import Slider from './Slider'

class ScreenGreeting extends Component {
    render() {
        return (
            <div className="screen-greeting">
                <div className="screen-greeting__content">
                    <Header />
                    <Greeting />
                    <Slider />
                </div>
            </div>
        )
    }
}
export default ScreenGreeting;
