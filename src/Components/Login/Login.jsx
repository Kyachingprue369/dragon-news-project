import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
  const { userSignIn, setUser } = useContext(AuthContext);

  const handleSignIn = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userSignIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div className="card bg-base-100 mx-auto p-4 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-2xl font-black pb-8 border-b-2 border-gray-400'>Login your account</h2>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="fieldset-label">Email Address</label>
          <input type="email" className="input" name='email' placeholder="Enter your email address" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" name='password' placeholder="Enter your password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='py-4 text-center'>Don't Have An Account? <Link to="/auth/register" className='text-blue-600 underline'>Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;