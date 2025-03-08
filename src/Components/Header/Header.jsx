import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-5'>
      <img src={logo} alt="" />
      <p className='text-xl text-gray-500'>Journalism Without Fear or Favour</p>
      <p className='text-xl text-gray-700'>{moment().format('LLLL')}</p>
    </div>
  );
};

export default Header;