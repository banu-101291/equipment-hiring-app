import React from 'react';
import AuthService from '../services/AuthService';

function UserProfile({ onLogout }) {
  const handleLogout = () => {
    AuthService.logout();
    // onLogout();
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, {localStorage.getItem('user')}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
