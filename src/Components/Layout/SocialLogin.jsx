import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div className='flex flex-col my-5 gap-3'>
      <button className='btn text-blue-400'> <FaGoogle /> Login with Google </button>
      <button className='btn'> <FaGithub /> Login with Github </button>
    </div>
  );
};

export default SocialLogin;