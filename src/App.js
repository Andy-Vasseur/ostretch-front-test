import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Stretch from './pages/Stretch';
import Stretches from './pages/Stretches';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Error404 from './pages/Error404/error404';
import MySpace from './pages/MySpace';
import Formulaire from './pages/Contact/Formulaire';


const App = () => {
  const [user, setUser]= useState('')
  const [isLogged, setIsLogged] = useState(false)
  const handleLogin = (item) => {
    setUser(item);
    setIsLogged(true)
    console.log('Connecté')
  }
  
const handleLogout = () => {
  setIsLogged(false);
  setUser('');
  localStorage.clear();
}

  return (
    <div className='App'>
      <Navbar isLogged={isLogged} onLogout={handleLogout}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stretches' element={<Stretches isLogged={isLogged} />} />
        <Route path='/stretches/:id' element={<Stretch />} />
        <Route path='/login' element={<Login onSubmitLoginForm={handleLogin} />} />
        <Route path='/stretches/stretch' element={<Stretch />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Formulaire />} />
        {
        user ? <Route path='/my-space' element={<MySpace user={user} setUser={setUser} />} /> : <Route path='/my-space' element={<Login />} />
        }
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;