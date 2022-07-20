 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_piKey,
  authDomain:process.env.REACT_APP_thDomain,
  projectId:process.env.REACT_APP_ojectId,
  storageBucket:process.env.REACT_APP_orageBucket,
  messagingSenderId: process.env.REACT_APP_ssagingSenderId,
   appId: process.env.REACT_APP_pId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app;
export default auth;