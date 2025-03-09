import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const RightNavbar = () => {
  return (
    <div>
      <h3 className='font-bold text-xl'>Login With</h3>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNavbar;