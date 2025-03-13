import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  }

  const logOutUser = () => {
    setLoading(true)
    return signOut(auth);
  }

  const authInfo = {
    users,
    setUser,
    createSignUp,
    loading,
    userSignIn,
    logOutUser,
    updateUserProfile,

  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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