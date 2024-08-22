// // // App.js - Frontend React Code

// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function RegistrationForm({toggleForm}) {
// //   const [userData, setUserData] = useState({
// //     name: '',
// //     password: '',
// //     email: '',
// //     phone: '',
// //     profession: ''
// //   });

// //   const handleChange = (e) => {
// //     e.preventDefault()
// //     const { name, value } = e.target;
// //     setUserData({ ...userData, [name]: value });
// //   };

// //   const handleRegister = async () => {
// //     try {
// //       const response = await axios.post('https://assigment-besant-1.onrender.com/register', userData);
// //       alert('Registration successful!');
// //       setUserData(response)
// //     } catch (error) {
// //       alert('Registration failed. Please try again.');
// //     }
// //   };

// // //   const handleLogin = async () => {
// // //     // Login functionality
// // //   };

// // //   const handleUpdateUser = async (userId) => {
// // //     // Update user functionality
// // //   };

// // //   const handleDeleteUser = async (userId) => {
// // //     // Delete user functionality
// // //   };

// //   return (
// //    <div>
// //       <h1>User Registration</h1>
// //       <input type="text" name="name" placeholder="Name" onChange={handleChange} />
// //       <input type="password" name="password" placeholder="Password" onChange={handleChange} />
// //       <input type="email" name="email" placeholder="Email" onChange={handleChange} />
// //       <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
// //       <input type="text" name="profession" placeholder="Profession" onChange={handleChange} />
// //       <button onClick={handleRegister}>Register</button>
// //       <p>
// //         Already have an account? <span onClick={toggleForm}>Login here</span>
// //       </p>
// //       </div>
// //   );
// // }

// // export default RegistrationForm;





// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function RegistrationForm() {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const users = JSON.parse(localStorage.getItem('users')) || [];

// //     if (users.some((user) => user.email === email)) {
// //       alert('Email already registered');
// //     } else {
// //       users.push({ username, email, password });
// //       localStorage.setItem('users', JSON.stringify(users));
// //       navigate('/');
// //     }
// //   };

// //   return (
// //     <div className="register-container">
// //       <h2>Register</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Username:</label>
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Register</button>
// //       </form>
// //       <p>
// //         Already have an account? <a href="/">Login here</a>
// //       </p>
// //     </div>
// //   );
// // }

// // export default RegistrationForm;



// // UserRegistrationPage.js

// import React, { useState } from 'react';
// import axios from 'axios';
// const RegistrationForm= () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [profession, setProfession] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Encrypt the password before sending it to the server
//     // You can use a library like bcrypt.js on the frontend for demonstration purposes

//     // Make a POST request to the backend API to register the user
//     try {
//       const response = await axios.post('https://assigment-besant-1.onrender.com/register', {
//         name,
//         password,
//         email,
//         phone,
//         profession,
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error registering user:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>User Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="phone" className="form-label">Phone Number</label>
//           <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="profession" className="form-label">Profession</label>
//           <input type="text" className="form-control" id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} required />
//         </div>
//         <button type="submit" className="btn btn-primary">Register</button>
        
//       </form>
//       <p>
//       Already have an account? <a href="/">Login here</a>
//        </p>
//     </div>
//   );
// };

// export default RegistrationForm;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const RegistrationForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [profession, setProfession] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     axios.post('https://assigment-besant-1.onrender.com/users/register', { name, email, password, phone, profession })
//       .then((response) => {
//         toast.success('Registration successful!');
//         // Clear the form or redirect to login page
//       })
//       .catch((error) => {
//         toast.error('Registration failed!');
//         console.error(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="phone" className="form-label">Phone No</label>
//           <input
//             type="text"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="profession" className="form-label">Profession</label>
//           <input
//             type="text"
//             id="profession"
//             value={profession}
//             onChange={(e) => setProfession(e.target.value)}
//             className="form-control"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;



import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://assigment-besant-1.onrender.com/users/register', {
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
       Already have an account? <a href="/">Login here</a>
        </p>
    </div>
    </div>
  );
};

export default RegisterUser;
