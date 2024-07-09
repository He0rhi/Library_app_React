import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import { Provider } from 'react-redux';
import { RootState } from '../store/store';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import '../styles/main.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const App: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
 <div>
      <Router>
        <Routes>
        <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home user={user} />} />
        

        </Routes>
      </Router>
      <ToastContainer />
      </div>
   
  );
};

export default App;
