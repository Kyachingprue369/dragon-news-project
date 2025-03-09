import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./../../App.css"

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then(res => res.json())
      .then(data => setCategories(data.data.news_category))
  }, [])

  // category_id
  // category_name


  return (
    <div className='mb-10'>
      <h3 className='font-bold text-xl'>All Category ({categories.length})</h3>
      <div className='flex flex-col gap-3 mt-5'>
        {
          categories.map(category => <NavLink to={`/category/${category.category_id}`} className='btn' key={category.category_id}>{category.category_name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default LeftNavbar;