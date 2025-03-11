import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  const { createSignUp } = useContext(AuthContext);

  const handleSignUp = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photo, email, password);
    createSignUp(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <div className="card bg-base-100 mx-auto p-4 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className='text-center text-2xl font-black pb-8 border-b-2 border-gray-400'>Register your account</h2>
          <form onSubmit={handleSignUp} className="fieldset gap-3">
            <label className="fieldset-label font-bold">Your Name</label>
            <input type="text" className="input" name='name' placeholder="Enter your Name" required />
            <label className="fieldset-label font-bold">Photo URL</label>
            <input type="text" className="input" name='photo' placeholder="Enter your Photo" required />
            <label className="fieldset-label font-bold">Email Address</label>
            <input type="email" className="input" name='email' placeholder="Enter your email address" required />
            <label className="fieldset-label font-bold">Password</label>
            <input type="password" className="input" name='password' placeholder="Enter your password" required />
            <button className="btn btn-neutral mt-4">Register</button>
            <p className='py-4 text-center'>Already Have An Account? <Link to="/auth/login" className='text-blue-600 underline'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;