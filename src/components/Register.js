import React from 'react';

function Register() {
    return (
        <form className='authentication'>
            <h1 className='authentication__title'>Регистрация</h1>
            <input name="e-mail" type="text" className='authentication__input' placeholder='Email' />
            <input name="password" type="email" className='authentication__input' placeholder='Пароль' />
            <button type="submit" className='authentication__button'>Зарегистрироваться</button>
            <p className='authentication__link'>Уже зарегистрированы? <a>Войти</a></p>
        </form>
    )
}

export default Register;