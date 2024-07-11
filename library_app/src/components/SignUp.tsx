import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home'); 
      toast.success("Вы успешно зарегистрировались");
    } catch (error:any) {
      console.error('Error signing up:', error);
      if (error.code === 'auth/invalid-email') {
        toast.error('Неправильный формат почты');
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error('Пользователь с такой почтой уже существует');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Пароль слишком простой');
      } else {
        toast.error(error.code);
      }
    }
  };

  const handleLogInAsGuest = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      navigate("/");
      toast.success("Вы зашли как гость");
    } catch (error) {
      toast.error('Ошибка входа как гость');
    }
  };

  return (
    <div className='signwindow'>
      <h2 className='signtitle'>Регистрация</h2>
      <form className='signform' >
      <input className='emailform'
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    required
  />
  <input className='passwordform'
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    required
  />
  <button className='signbutton' type="submit" onClick={handleSignUp}>Зарегистрироваться</button>
  <button className='signasquest' type="button" onClick={handleLogInAsGuest}>Войти как гость</button>      </form>
     
      <div className='reservecase'>
      <p>
        Уже есть аккаунт? <Link  to="/signin">Войти</Link>
      </p>
      </div>
    </div>




/*
<div className='signwindow'>
<h2>Вход</h2>
<form className='signform' >
  <input className='emailform'
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    required
  />
  <input className='passwordform'
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    required
  />
  <button className='signbutton' type="submit" onClick={handleLogin}>Зарегистрироваться</button>
  <button className='signasquest' type="button" onClick={handleLogInAsGuest}>Войти как гость</button>

</form>
<div className='reservecase'>

<p>
        Уже есть аккаунт? <Link to="/signin">Войти</Link>
</p>
</div>
</div>*/
  );
};

export default SignUp;
