import React from 'react';
import {  Routes, Route, } from 'react-router-dom';

import Home from './pages/Home';
import UserProfilePage from './pages/UserProfilePage';
//import NotFound from './pages/NotFound';
// import PrivateRoute from './utils/PrivateRoute';
//import NavBar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/LoginPage';
import Logout from './pages/Auth/Logout';
import Dashboard from './pages/user/Dashboard';
import AuthProvider from "./provider/Authprovider";
import Routing from "./routes/index";
import AdminDashboard from './pages/Admin/AdminDashboard';
import Users from './pages/Admin/Users';
import AdminRoute from './routes/AdminRoute';
//import Dashboard from './pages/user/Dashboard';

function App() {
  return (
    < >
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path='/Routing' element={ <AuthProvider><Routing/></AuthProvider>}/>
      
        <Route path="/dashboard" element={<AdminRoute />}/>
          <Route path="admin" element={<AdminDashboard />} />
        <Route path = 'user' element = {<Dashboard/>}/>
        <Route path="admin/users" element={<Users />} />
    
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
