// src/layouts/AdminLayout.js
import React from 'react';
import Usernavbar from './Usernavbar';
import Usersidebar from './Usersidebar';
import Userfooter from './Userfooter';
const UserLayout = ({ children }) => {
  return (
    <div>
      <Usernavbar/>
      <Usersidebar/>
      <main className="p-6 sm:p-4 md:p-8 lg:pl-20 mx-auto max-w-screen-lg">
  {children}
</main>

      <Userfooter/>
    </div>
  );
};

export default UserLayout;
