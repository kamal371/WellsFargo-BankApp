import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Admindashboard.css';
function AdminDashboard() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/admin/admin");
    // console.log(result);
    setUsers(result.data);
  };
/*
  useEffect(() => {
    // Fetch user details from your backend API
    // For example: fetchUserDetails().then(data => setUserDetails(data));
    const simulatedUserDetails = [
      { id: 1, username: 'user1', email: 'user1@example.com', balance: 1000 },
      { id: 2, username: 'user2', email: 'user2@example.com', balance: 2500 },
      // ... fetch more user details
    ];
    setUserDetails(simulatedUserDetails);
  }, []);
*/
  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            {/* <th>Password</th> */}
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>

          {user.map(user => (
            <tr key={user.customer_id}>
              <td>{user.customer_id}</td>
              <td>{user.customer_name}</td>
              {/* <td>{user.password}</td> */}
              <td>{user.email}</td>
              <td>{user.contact}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
