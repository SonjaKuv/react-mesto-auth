import React from 'react';

function Login({ onLogin, setIsRegForm }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    console.log('логин');
    React.useEffect(() => {
        setIsRegForm(false);
    }, []);

    function handleSubmit(evt) {
        evt.preventDefault();
        onLogin( email, password )
    };

    return (
        <form className='authentication' onSubmit={handleSubmit}>
            <h1 className='authentication__title'>Вход</h1>
            <input name="email" type="email" className='authentication__input' placeholder='Email'
                defaultValue={email} onChange={({ target: { value } }) => setEmail(value)} />
            <input name="password" type="text" className='authentication__input' placeholder='Пароль'
                defaultValue={password} onChange={({ target: { value } }) => setPassword(value)} />
            <button type="submit" className='button authentication__button'>Войти</button>
        </form>
    )
}

export default Login;