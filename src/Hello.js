
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Login from './Task/Login';
import { useEffect, useState } from 'react';

import Rout from './Task/Rout';
import Front from './Task/Front';

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("login"))
  const navigate = useNavigate()
  console.log(typeof isLogin, isLogin)
  return (
    <>
      {isLogin === "true" ? (
        <Rout />
      ) : (
        <Front setIsLogin={setIsLogin} isLogin={isLogin}/>
        // <Login setIsLogin={setIsLogin} />
      )}

      <Routes>
      <Route path="/login" element={<Login setIsLogin={setIsLogin}/>} />
      {/* <Route path="/dashbord" element={<Front />} /> */}
      </Routes> 
    </>
  );
}

export default App;