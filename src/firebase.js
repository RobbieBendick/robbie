import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://todo-6c4ee-default-rtdb.firebaseio.com',
  projectId: 'todo-6c4ee',
  storageBucket: 'todo-6c4ee.firebasestorage.app',
  messagingSenderId: '243513203141',
  appId: '1:243513203141:web:c2370a417c02972f3b13ac',
  measurementId: 'G-TJ94MY0K2Q',
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
