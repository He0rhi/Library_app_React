import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); 
      toast.success("Вы успешно вошли");
    } catch (error: any) {
      console.error('Error signing in:', error);
      if (error.code === 'auth/invalid-email') {
        toast.error('Неправильный формат почты');
      } else if (error.code === 'auth/user-not-found') {
        toast.error('Пользователь не найден');
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Неправильный пароль');
      }else if (error.code === 'auth/invalid-credential') {  toast.error('Введены неверные данные');}else {
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
      <h2 className='signtitle'>Вход</h2>
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
        <button className='signbutton' type="submit" onClick={handleLogin}>Войти</button>
        <button className='signasquest' type="button" onClick={handleLogInAsGuest}>Войти как гость</button>

      </form>
      <div className='reservecase'>

      <p>
        У вас нет аккаунта? <Link to="/signup">Зарегистрируйтесь</Link>
      </p>
      </div>
    </div>
  );
};

export default SignIn;
