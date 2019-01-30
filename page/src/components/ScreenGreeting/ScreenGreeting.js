import React, { Component } from 'react';
import Header from '../Header/Header'
import Greeting from '../Greeting/Greeting'
import './ScreenGreeting.scss'
import Slider from '../Slider/Slider'

class ScreenGreeting extends Component {
    render() {
        return (
            <section className="screen-greeting">
                <div className="screen-greeting__content">
                    <Header />
                    <Greeting />
                    <Slider />
                </div>
            </section>
        )
    }
}
export default ScreenGreeting;
