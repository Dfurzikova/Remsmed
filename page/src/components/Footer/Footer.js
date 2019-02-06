import React, { Component } from 'react';
import './Footer.scss'
import footerLogo from '../../assets/footer-logo.png'

class Footer extends Component {
    render() {
        return (

            <footer className="footer">
                <div className="footer__content">
                    <img className="footer__logo" src={footerLogo} />
                    <ul className="footer__menu footer-menu">
                        <li className="footer-menu__item" >
                            <a className="link" href="#">О сервисе</a>
                        </li>
                        <li className="footer-menu__item">
                            <a className="link" href="#">Функции</a>
                        </li>
                        <li className="footer-menu__item">
                            <a className="link" href="#">Возможности</a>
                        </li>
                        <li className="footer-menu__item">
                            <a className="link" href="#">Специалистам</a>
                        </li>
                        <li className="footer-menu__item">
                            <a className="link" href="#">88005005009</a></li>
                    </ul>
                </div>
                <div className="footer__copyright">Разработка сайта <span className="text_color_pink">Redsoft</span></div>
            </footer>
        )
    }
}
export default Footer;
