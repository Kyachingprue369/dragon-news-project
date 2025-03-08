import React from 'react';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/Header/LatestNews';

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section>
        <LatestNews></LatestNews>
      </section>
    </div>
  );
};

export default MainLayout;