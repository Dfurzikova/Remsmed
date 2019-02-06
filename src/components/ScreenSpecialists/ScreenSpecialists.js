import React, { Component } from 'react';
import './ScreenSpecialists.scss'
import Section from '../Section/Section'
import img from '../../assets/analytics.png'

class ScreenSpecialists extends Component {
    render() {
        const specialistsList= this.props.specialists.map((item) =>
        <li>{item.text}</li>
        )
        return (
            <Section id="specialists" className="specialists">
                <div className="specialists__content">
                <img className="specialists__image" src={img}/>
                <div className="specialists__info">
                <h1 className="specialists__title">Специалистам</h1>
                <ul className="specialists__list">
                    {specialistsList}
                </ul>
                </div>

                </div>
            </Section>
        )
    }
}
export default ScreenSpecialists;
