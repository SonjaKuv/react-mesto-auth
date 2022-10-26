import React from 'react';
import logo from '../images/logo.svg';
import { Link, Route, Routes } from 'react-router-dom';

function Header({ email, onSignOut}) {
    return (
        <header className="header">
            <img className="header__logo" alt="Место" src={logo} />
            <Routes>
                <Route exact path="/" element={<nav className="header__navigation">
                        <p className="header__email">{email}</p>
                        <a className="header__link" onClick={onSignOut}>Выйти</a>
                    </nav>}>
                </Route>
                <Route path="/sign-up" element={
                     <nav className="header__navigation">
                        <Link className="header__link" to={"/sign-in"}>Войти</Link>
                    </nav>
                }> 
                </Route>
                <Route path="/sign-in" element={<nav className="header__navigation">
                        <Link className="header__link" to={"/sign-up"}>Регистрация</Link>
                    </nav>}>
                </Route>
            </Routes>
        </header>
    )
}

export default Header;