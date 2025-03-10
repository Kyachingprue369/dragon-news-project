import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const AuthLayout = () => {
  return (
    <div className='w-11/12 mx-auto pb-24 bg-[#F3F3F3]'>
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;