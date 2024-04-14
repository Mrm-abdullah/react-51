// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa9a94EB2Vil0quQDO6oMpxZ1BYd4Pfqk",
  authDomain: "react-51.firebaseapp.com",
  projectId: "react-51",
  storageBucket: "react-51.appspot.com",
  messagingSenderId: "19449128921",
  appId: "1:19449128921:web:bea24a5353d116de981bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;