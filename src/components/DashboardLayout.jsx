// DashboardLayout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DashboardLayout = ({ children }) => {
  return (
    <div>
        <Navbar/>
      <main>{children}</main>
      <div className=''>
      <Footer/>
      </div>
      
    </div>
  );
};

export default DashboardLayout;
