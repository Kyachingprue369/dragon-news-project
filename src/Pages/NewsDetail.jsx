import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';

const NewsDetail = ({ news }) => {
  const { image_url, title, details } = news;
  console.log(news);
  return (
    <div className='mr-10'>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            className='p-5 w-full h-full'
            src={image_url}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions my-5 justify-star">
            <Link to={`/category/${news?.category_id}`} className="bg-red-600 flex items-center text-white py-2 px-5"><GoArrowLeft className='mr-3 text-xl' /> All news in this category</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;