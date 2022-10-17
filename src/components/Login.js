import React from 'react';

function Login() {
    return (
        <form className='authentication'>
            <h1 className='authentication__title'>Вход</h1>
            <input name="e-mail" type="text" className='authentication__input' placeholder='Email' />
            <input name="password" type="email" className='authentication__input' placeholder='Пароль' />
            <button type="submit" className='button authentication__button'>Войти</button>
        </form>
    )
}

export default Login;