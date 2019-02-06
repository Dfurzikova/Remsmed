import React, { Component } from 'react';
import './ScreenPersonalDiary.scss'
import Section from '../Section/Section'
import phones from '../../assets/phones.png'
import lines from '../../assets/lines.png'

class ScreenPersonalDiary extends Component {
    render() {
        const reasons = this.props.reasons.map((item) =>
            <li className="reason__item">
                <h1 className="reason__title">{item.title}</h1>
                <p className="reason__text">{item.text}</p>
            </li>)

        return (
            <Section id="personal-diary-scope" className="personal-diary">
            <img className="personal-diary__background" src={lines}/>
                <div className="personal-diary__content">
                    <h1 className="personal-diary__title">Ведите персональный дневник мониторинга здоровья</h1>
                    <div className="personal-diary__infomation">
                        <ul className="personal-diary__reasons reason">
                        {reasons}
                        </ul>
                        <img className="personal-diary__image" src={phones}/>
                    </div>

                </div>

            </Section>
        )
    }
}
export default ScreenPersonalDiary;
