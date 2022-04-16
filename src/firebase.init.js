// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ7X_t_Zz4KiJCIGJ6ak8X4ai3Psp6xz0",
  authDomain: "online-photography-servi-16045.firebaseapp.com",
  projectId: "online-photography-servi-16045",
  storageBucket: "online-photography-servi-16045.appspot.com",
  messagingSenderId: "49683563707",
  appId: "1:49683563707:web:861c8a27dd8ecdc9f2d59e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;