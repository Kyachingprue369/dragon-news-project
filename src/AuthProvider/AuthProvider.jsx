import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [users, setUser] = useState([]);

  const createSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOutUser = () => {
    return signOut(auth);
  }

  const authInfo = {
    users,
    setUser,
    createSignUp,
    userSignIn,
    logOutUser,
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    }
  }, [])
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;