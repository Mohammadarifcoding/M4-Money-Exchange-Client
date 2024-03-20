// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRfrLQuvuftgAIb32I5jb2kxYAIZsNQD0",
  authDomain: "m4-money-exchange.firebaseapp.com",
  projectId: "m4-money-exchange",
  storageBucket: "m4-money-exchange.appspot.com",
  messagingSenderId: "299927617073",
  appId: "1:299927617073:web:a2a18eccf0cc1809f3df10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)

export default Auth
