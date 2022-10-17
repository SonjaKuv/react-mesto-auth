import React from 'react';

function Register() {
    return (
        <form className='authentication'>
            <h1 className='authentication__title'>Регистрация</h1>
            <input name="e-mail" type="text" className='authentication__input' placeholder='Email' />
            <input name="password" type="email" className='authentication__input' placeholder='Пароль' />
            <button type="submit" className='button authentication__button'>Зарегистрироваться</button>
            <p className='authentication__text'>Уже зарегистрированы? <a href='#' className='authentication__link'>Войти</a></p>
        </form>
    )
}

export default Register;