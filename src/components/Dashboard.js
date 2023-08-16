import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // You can create this CSS file for styling

function Dashboard() {
  const [accountBalance, setAccountBalance] = useState(0); // You can fetch this from the backend

  const navigate = useNavigate(); // Access the navigate function



  // Fetch account balance from backend on component mount
  useEffect(() => {
    // Simulated fetch, replace with actual backend call
    // For example: fetchAccountBalance().then(data => setAccountBalance(data));
    const simulatedAccountBalance = 5000; // Replace with actual fetched value
    setAccountBalance(simulatedAccountBalance);
  }, []);

  // Logout user and redirect to login page
  const handleLogout = () => {
    // Clear user session or token here if necessary
    navigate('/login'); 
    console.log("logout");
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <p>Your Account Balance: ${accountBalance}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
