import React, { Component } from 'react';
import './Menu.scss'
import Button from '../Button/Button'

class Menu extends Component {
    render() {
        return (

            <ul className="menu">
                <li className="menu__item">
                    <a className="link" href="#">О сервисе </a>
                </li>
                <li className="menu__item">
                    <a className="link" href="#">Функции </a>
                </li>
                <li className="menu__item">
                    <a className="link" href="#">Возможности</a>
                </li>
                <li className="menu__item">
                    <a className="link" href="#">Партнеры</a>
                </li>
                <Button className="menu__button button_theme_transparent button_size_m" name="Оставить заявку" />
            </ul>
        )
    }
}
export default Menu;

