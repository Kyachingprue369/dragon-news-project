// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAsQm14jAtVxSYy3adGzRqey4HzAs6v1ww',
  authDomain: 'dragon-news-auth-1d024.firebaseapp.com',
  projectId: 'dragon-news-auth-1d024',
  storageBucket: 'dragon-news-auth-1d024.firebasestorage.app',
  messagingSenderId: '955945263092',
  appId: '1:955945263092:web:3b3ab43d3ea73bc0abe3a1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
