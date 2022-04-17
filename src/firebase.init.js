// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuQTZi_HK9KUFWgFmwnmsfFY2aLIsV7eY",
  authDomain: "photographer-mahin-8c586.firebaseapp.com",
  projectId: "photographer-mahin-8c586",
  storageBucket: "photographer-mahin-8c586.appspot.com",
  messagingSenderId: "584115924312",
  appId: "1:584115924312:web:d0a26a2daa64adcaf1092d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;