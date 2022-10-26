import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ email, loggedIn, onSignOut, isRegForm }) {
    return (
        <header className="header">
            <img className="header__logo" alt="Место" src={logo} />
            <nav className="header__navigation">
                <p className="header__email">{email}</p>
                <Link className="header__link" onClick={loggedIn && onSignOut} to={loggedIn ? "/sign-in" : isRegForm ? "/sign-in" : "/sign-up"}>{loggedIn ? "Выйти" : isRegForm ? "Войти" : "Регистрация"}</Link>
            </nav>
        </header>
    )
}

export default Header;