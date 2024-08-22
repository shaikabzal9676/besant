import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Homepage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const selectUser = (user) => {
    setSelectedUser(user);
    setName(user.username || ""); 
    setPhone(user.phone || ""); 
    setEmail(user.email || ""); 
  };

  const updateUser = async (userId, newName, newPhone) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/users/${userId._id}`,
        {
          name: newName,
          phone: newPhone,
        }
      );
      console.log(response.data); // Updated user data
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then((response) => {
        toast.success("User deleted successfully!");
        setUsers(users.filter((user) => user._id !== userId));
      })
      .catch((error) => {
        toast.error("Delete failed!");
        console.error(error);
      });
  };
  return (
    <div className="home-container">
        <div className="nav">
      <h2>Welcome to the Home Page</h2>
      <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
      <h3>Registered Users:</h3>
      <ul >
        {users.map((user) => (
          <li key={user._id} className="cardy">
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button 
              onClick={() => handleDelete(user._id)}
              className="btn btn-danger btn-sm ml-2"
            >
              Delete
            </button>
            <Link
              to="/update-user"
              state={user}
              className="btn btn-primary btn-sm ml-2"
            >
              Update
            </Link>
          </li>
        ))}
      </ul>


      </div>
  );
}

export default Homepage;
