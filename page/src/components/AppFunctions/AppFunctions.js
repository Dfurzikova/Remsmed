import React, { Component } from 'react';
import './AppFunctions.scss'
import Section from '../Section/Section'


class AppFunctions extends Component {
    render() {
        const listItems = this.props.functions.map((item) =>
            <div className="functions__item">
                <div className="functions__logo">
                    <img className="functions_icon" alt="image" src={item.icon} />
                </div>
                <div className="functions__text">{item.title}</div>
            </div>
        );

        return (
            <Section id="app-functions">
                <div className="app-functions__content">
                    <h1 className="app-functions__title">Функции приложения</h1>
                    <div className="app-functions__functions functions">
                        {listItems}
                    </div>
                </div>
            </Section>
        )
    }
}
export default AppFunctions;
