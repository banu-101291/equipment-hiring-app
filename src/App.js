import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import UserProfilePage from './pages/UserProfilePage';
import NotFound from './pages/NotFound';
// import PrivateRoute from './utils/PrivateRoute';
import NavBar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/LoginPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
