import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {
    users,
    handleSignUp,
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;