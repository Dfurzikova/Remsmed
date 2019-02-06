import React, { Component } from 'react';
import './ScreenAccess.scss'
import Section from '../Section/Section'
import Input from '../Input/Input'
import Button from '../Button/Button'


class ScreenAccess extends Component {
    render() {
        return (
            <Section id="screen-access" className="access">
            <div className="access__content">
                <h1 className="access__title">Получите бесплатный доступ к «Дневнику здоровья»</h1>
                <h2 className="access__subtitle">Оставьте свою электронную почту<br/>и вы узнаете о запуске данного сервиса первым!</h2>
                <form className="access__form form">
                    <Input placeholder="Ваш E-mail" className="form__input input_theme_transparent"/>
                    <Button className="form__button button_size_s button_theme_color" name="Отправить" />
                </form>
            </div>

            </Section>
        )
    }
}
export default ScreenAccess;
