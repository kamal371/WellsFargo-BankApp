import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Adminlogin.css';
function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulated admin login logic
    if (username === 'admin' && password === 'admin123') {
      navigate('/admindashboard');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {loginError && <span className="error-message">{loginError}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
