import React, { Component } from 'react';
import Header from '../Header/Header'
import Greeting from '../Greeting/Greeting'
import './ScreenGreeting.scss'
import Slider from '../Slider/Slider'
import Section from '../Section/Section'


class ScreenGreeting extends Component {
    render() {
        return (
            <Section id="screen-greeting" className="screen-greeting">

                <div className="screen-greeting__content">
                    <Header />
                    <Greeting />
                    <Slider />
                </div>

            </Section>
        )
    }
}
export default ScreenGreeting;
