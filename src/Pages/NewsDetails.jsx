import React from 'react';
import Header from '../Components/Header/Header';
import RightNavbar from '../Components/Layout/RightNavbar';
import { useLoaderData } from 'react-router-dom';
import NewsDetail from './NewsDetail';


const NewsDetails = () => {
  const userData = useLoaderData();
  const news = userData.data[0];
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 mt-16 gap-5">
        <section className='col-span-9'>
          <h2 className='font-bold'>Dragon news</h2>
          <div>
            <NewsDetail news={news}></NewsDetail>
          </div>
        </section>
        <aside className='col-span-3'>
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;