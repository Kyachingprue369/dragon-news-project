import React from 'react';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/Header/LatestNews';
import Navbar from '../Components/Navbar/Navbar';

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
        <aside className='col-span-3 font-bold text-xl'>All Category</aside>
        <section className='col-span-6 font-bold text-xl'>Dragon News Home</section>
        <aside className='col-span-3 font-bold text-xl'>Login With</aside>
      </main>
    </div>
  );
};

export default MainLayout;