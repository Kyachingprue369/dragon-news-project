import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <div className="card bg-base-100 mx-auto p-4 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className='text-center text-2xl font-black pb-8 border-b-2 border-gray-400'>Register your account</h2>
          <fieldset className="fieldset gap-3">
            <label className="fieldset-label font-bold">Your Name</label>
            <input type="text" className="input" placeholder="Enter your Name" />
            <label className="fieldset-label font-bold">Photo URL</label>
            <input type="text" className="input" placeholder="Enter your Photo" />
            <label className="fieldset-label font-bold">Email Address</label>
            <input type="email" className="input" placeholder="Enter your email address" />
            <label className="fieldset-label font-bold">Password</label>
            <input type="password" className="input" placeholder="Enter your password" />
            <button className="btn btn-neutral mt-4">Login</button>
            <p className='py-4 text-center'>Already Have An Account? <Link to="/auth/login" className='text-blue-600 underline'>Login</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;