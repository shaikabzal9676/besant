

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './LoginForm';
import Register from './RegistrationForm';
import Home from './Homepage';
import UpdateUser from './UpdateUser';
import './App.css'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/update-user" element={ <UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
