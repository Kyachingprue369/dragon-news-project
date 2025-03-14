import React, { useContext } from 'react';
import PhotoUser from '../../assets/user.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Navbar = () => {

  const { users, logOutUser } = useContext(AuthContext);
  const links = <div className='flex gap-3 text-gray-500'>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>
  </div>
  return (
    <div className='w-11/12 mx-auto my-7'>
      <div className="navbar">
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
          {
            users && users?.email ? (<div className='flex items-center gap-4'>
              <div className='flex items-center gap-3'>
                <p className='text-xl font-bold'>{users.displayName}</p>
                <img className='w-10 h-10 rounded-full mx-auto' src={users?.photoURL} alt="" />
              </div>
              <button onClick={logOutUser} className="bg-gray-800 font-bold text-white py-2 px-7">Log Out</button>
            </div>)
              :
              <div className='flex items-center gap-4'>
                <img src={PhotoUser} alt="" />
                <Link to="/auth/login" className="bg-gray-800 font-bold text-white py-2 px-7">Login</Link>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;