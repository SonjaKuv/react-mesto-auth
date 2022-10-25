import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import * as auth from '../auth';

function Register({ onRegister, setIsRegForm }) {
    console.log('reg');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const history = useNavigate();
    console.log(email);
    React.useEffect(() => {
        setIsRegForm(true);
    }, []);

    function handleSubmit(evt) {
        evt.preventDefault();
        onRegister(email, password);
    };

    return (
        <form className='authentication' onSubmit={handleSubmit}>
            <h1 className='authentication__title'>Регистрация</h1>
            <input name="email" type="email" className='authentication__input' placeholder='Email'
                defaultValue={email} onChange={({ target: { value } }) => setEmail(value)} />
            <input name="password" type="text" className='authentication__input' placeholder='Пароль'
                defaultValue={password} onChange={({ target: { value } }) => setPassword(value)} />
            <button type="submit" className='button authentication__button'>Зарегистрироваться</button>
            <p className='authentication__text'>Уже зарегистрированы? <Link to="/sign-in" className='authentication__link'>Войти</Link></p>
        </form>
    )
}

export default Register;