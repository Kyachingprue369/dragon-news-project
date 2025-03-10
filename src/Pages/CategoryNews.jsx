import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/Layout/NewsCard';


const CategoryNews = () => {
  const { data: newsCard } = useLoaderData();

  console.log(newsCard)
  return (
    <div>
      <div>
        {
          newsCard.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;