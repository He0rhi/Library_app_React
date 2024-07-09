import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home'); 
      toast.success("Вы успешно зарегистрировались");
    }catch (error: any) {
      console.error('Error signing up:', error);
      if (error.code === 'auth/invalid-email') {
        toast.error('Неправильный формат почты');
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error('Пользователь с такой почтой уже существует');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Пароль слишком простой');
      } else {
        toast.error('Ошибка входа, попробуйте снова.');
      }}
  };
  const handleLogInAQuest= async (event:React.FormEvent)=>{
event.preventDefault();
try{
  navigate("/home");
  toast.success("Вы зашли как гость");
}
catch(error){
  
}
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <button type="submit" onClick={handleLogInAQuest}>Войти как гость</button>

    </div>
  );
};

export default SignUp;
