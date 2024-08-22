// server.js - Backend Node.js Express Code

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/Users');
const cors=require('cors')
const app = express();
app.use(cors())
app.use(express.json());



// Connect Mongoose

mongoose.connect('mongodb+srv://shaikabzal626:pe41hbP2TJQma2WM@cluster1.gtbu2.mongodb.net/nyapp?retryWrites=true&w=majority&appName=Cluster1', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/',(req,res)=>{
    res.json("Hello")
  })

  app.post('/users/register', async (req, res) => {
    const { name, email, password, phone, profession } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        phone,
        profession,
      });
  
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Registration failed', error });
    }
  });
  


// Backend Node.js Express code for login

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ success: false, message: 'Incorrect email or password' });
      }
  
      const validPassword = bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ success: false, message: 'Incorrect email or password' });
      }
  
      res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Login failed' });
    }
  });


  // Get All users 
  app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });





// Update  data 
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
    const { name,email,phone,profession } = req.body;
  try {
    

    
    const updatedUser = await User.findOneAndUpdate({ _id: id }, { name,email,phone,profession }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



// Delete a data
app.delete('/users/:_id', async (req, res) => {
  const { _id } = req.params;

  try {
    const result = await User.findByIdAndDelete(_id);

    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
});

  
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
