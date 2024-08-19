import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Apply from './components/Apply'; // This should be your next registration page component
 import Navbar from './components/Navbar';
 import Login from './components/Login';
import Home from './components/Home';
import UserDashboard from './components/userpages/UserDashboard';
import DashboardLayout from './components/DashboardLayout';
import UserLayout from './components/userpages/UserLayout';
import MyApplication from './components/userpages/MyApplication';
import Userprofile from './components/userpages/Userprofile';
function App() {
  return (
    <>
    
    <Router>
      
      <Routes>

      <Route path="/userdashboard" element={<UserLayout><UserDashboard /></UserLayout>} />
      <Route path="/application" element={<UserLayout><MyApplication /></UserLayout>} />
      <Route path="/userprofile" element={<UserLayout><Userprofile /></UserLayout>} />




      <Route path="/" element={<DashboardLayout><Home /></DashboardLayout>} /> 
      <Route path="/login" element={<DashboardLayout><Login /></DashboardLayout>} />
      <Route path="/login" element={<DashboardLayout><Navbar/></DashboardLayout>} />


        <Route path="/registration" element={<DashboardLayout><Registration /></DashboardLayout>} />
        <Route path="/application" element={<DashboardLayout><Apply /></DashboardLayout>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
