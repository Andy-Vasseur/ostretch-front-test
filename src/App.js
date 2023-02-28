import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Pages
import Home from './pages/Home';
import Stretch from './pages/Stretch';
import Stretches from './pages/Stretches';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Error404 from './pages/Error404/error404';
import MySpace from './pages/MySpace';


const App = () => {
  const [user, setUser] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  const handleLogin = (item) => {
    setUser(item);
    setIsLogged(true)
  }

  const handleLogout = () => {
    setIsLogged(false);
  }

  return (
    <div className='App'>
      <Navbar isLogged={isLogged} onLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stretches' element={<Stretches isLogged={isLogged} />} />
        <Route path='/stretch' element={<Stretch />} />
        <Route path='/login' element={<Login onSubmitLoginForm={handleLogin} />} />
        <Route path='/stretches/stretch' element={<Stretch />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/my-space' element={<MySpace />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;