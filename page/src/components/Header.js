import React, { Component } from 'react';
import './Header.scss'
import '../fonts/fonts.scss'
import logo from '../assets/header-logo.png'
import Menu from './Menu'

class Header extends Component {
    render() {
        return (

            <div className="header">
                <a href="#">
                    <img className="header__logo" alt="logo" src={logo} />
                </a>
                <Menu />
            </div>
        )
    }
}
export default Header;
