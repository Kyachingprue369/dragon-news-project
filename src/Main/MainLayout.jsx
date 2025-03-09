import React from 'react';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/Header/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftNavbar from '../Components/Layout/LeftNavbar';
import RightNavbar from '../Components/Layout/RightNavbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <section>
        <Navbar></Navbar>
      </section>
      <main className='w-11/12 mt-20 mx-auto grid md:grid-cols-12 gap-5'>
        <aside className='col-span-3 '><LeftNavbar></LeftNavbar></aside>
        <section className='col-span-6'>
          <p className='text-xl font-black'>Dragon News Home</p>
          <Outlet>
          </Outlet>
        </section>
        <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
      </main>
    </div>
  );
};

export default MainLayout;