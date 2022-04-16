// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4X-raBv0YxoYyYgzuGgxcLh08gRw9gKc",
  authDomain: "photographer-mahin.firebaseapp.com",
  projectId: "photographer-mahin",
  storageBucket: "photographer-mahin.appspot.com",
  messagingSenderId: "717279227964",
  appId: "1:717279227964:web:b3a31eced6cc79c21a5339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;