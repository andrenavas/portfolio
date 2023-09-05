import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBshTPPGEfeRHBK98VitOS97cTh16cR04Q",
  authDomain: "portfolio-fa111.firebaseapp.com",
  projectId: "portfolio-fa111",
  storageBucket: "portfolio-fa111.appspot.com",
  messagingSenderId: "191400514506",
  appId: "1:191400514506:web:da8c92e9be46d222da3533",
  measurementId: "G-6SPSR7081D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();

export { storage };