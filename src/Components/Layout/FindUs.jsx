import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div className='*:w-full my-5'>
      <h3 className='text-xl py-3 font-bold'>Find Us On</h3>
      <div className="join join-vertical">
        <button className="btn join-item py-6 justify-start"><FaFacebook className='text-blue-800' /> Facebook</button>
        <button className="btn join-item py-6 justify-start"><FaTwitter className='text-blue-400' /> Twitter</button>
        <button className="btn join-item py-6 justify-start"><FaInstagramSquare className='text-red-500' /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;