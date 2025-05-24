// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="p-4 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
