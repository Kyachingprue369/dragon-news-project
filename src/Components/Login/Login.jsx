import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="card bg-base-100 mx-auto p-4 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-2xl font-black pb-8 border-b-2 border-gray-400'>Login your account</h2>
        <fieldset className="fieldset">
          <label className="fieldset-label">Email Address</label>
          <input type="email" className="input" placeholder="Enter your email address" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Enter your password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='py-4 text-center'>Don't Have An Account? <Link to="/auth/register" className='text-blue-600 underline'>Register</Link></p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;