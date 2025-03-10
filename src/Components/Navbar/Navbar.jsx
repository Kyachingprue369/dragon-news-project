import React from 'react';
import user from '../../assets/user.png'


const Navbar = () => {
  const links = <div className='flex gap-3 text-gray-500'>
    <li><a>Home</a></li>
    <li><a>About</a></li>
    <li><a>Career</a></li>
  </div>
  return (
    <div className='w-11/12 mx-auto my-7'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end items-center gap-4">
          <img src={user} alt="" />
          <button className="bg-gray-800 font-bold text-white py-2 px-7">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;