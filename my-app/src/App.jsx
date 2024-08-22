// import React, { useState } from 'react'
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import LoginForm  from "./LoginForm"
// import Register from './RegistrationForm'
// import "./App.css"
// function App() {

//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="App">
//       {isLogin ? <LoginForm toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
//     </div>
//   );
// }


// export default App




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
