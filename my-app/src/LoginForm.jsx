
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate=useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://besant-b2gc.onrender.com/login', { email, password });
      if (response.data.success) {
        // Redirect to home page
        navigate('/home')
      } else {
        alert('Incorrect email or password. Please try again.');
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  const handleSv=()=>{
    navigate('/register')
  }
  return (
    <div className='login-page'>
      <h1>Login Page</h1>
      <div className="login-form">
      <div className="input-group mb-3">
  
  <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>
      <div className="input-group mb-3">
  
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
</div>

      <button className='btn btn-success' onClick={handleLogin}>Login</button>
      <p>
          Don't have an account? <button onClick={handleSv}>Register</button>
      </p>

      </div>
      
    </div>
  );
};

export default LoginForm;
