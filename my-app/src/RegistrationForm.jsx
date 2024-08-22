import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [loading, setLoading] = useState(false);
const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://localhost:5000/users/register', {
        name,
        email,
        password,
        phone,
        profession
      });
      toast.success('Registration successful!');
      // console.alert("regiseerd")
      alert("registed")
      // Reset form or redirect
    } catch (error) {
      toast.error('Registration failed!');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin=()=>{
    navigate('/')
  }
  return (
    <div className="container mt-3">
      <h2>Register</h2>
      <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="inp mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="inp mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="inp mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="inp mb-3">
          <label htmlFor="phone" className="form-label">Phone No</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="inp mb-3">
          <label htmlFor="profession" className="form-label">Profession</label>
          <input
            type="text"
            id="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <p>
       Already have an account? <button onClick={handleLogin}>Login Here</button>
        </p>
    </div>
    </div>
  );
};

export default RegisterUser;
