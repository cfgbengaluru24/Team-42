import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import VolunteerDashboard from '../volunteerdashboard/VolunteerDashboard';
import Home from '../volunteerdashboard/Home';
import Dashboard from '../volunteerdashboard/Dashboard';
import Profile from '../profile/Profile';
import Login from '../login/Login';
import SignUp from '../signup/Signup';
import { useAuthContext } from '../../context/AuthContext';

const RouterConfig = () => {
  const { authUser } = useAuthContext();

  return (
    <Router>
      <Routes>
        {authUser ? (
          <>
            <Route path="/" element={<VolunteerDashboard />}>
              <Route index element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/completeprofile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default RouterConfig;
