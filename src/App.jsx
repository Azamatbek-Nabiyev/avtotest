import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/layout/Header';
import Home from './features/Home';
import SignUp from './features/Auth/SignUp/index';
import Login from './features/Auth/Login/index';
import { useEffect, useState } from 'react';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {
  const [isAuth, setIsAuth] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuth(JSON.parse(user));
    }
  }, []);

  return (
    <div className='app'>
      {isAuth ? <Header /> : null}
      <Routes>
        <Route element={<ProtectedRoutes user={isAuth} />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route path='/signup' element={<SignUp setIsAuth={setIsAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
