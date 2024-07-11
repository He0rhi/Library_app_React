import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import SignUp from '../components/SignUp';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import '../styles/main.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignIn from './SignIn';
const App: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
 <div>
      <Router>
        <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home/>} />
         


        </Routes>
      </Router>
      <ToastContainer />
      </div>
   
  );
};

export default App;
