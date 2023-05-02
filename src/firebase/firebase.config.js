// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqp53wdBZTOJbTX9QRt0ughTsMgCZW4No",
  authDomain: "recipie-hunter.firebaseapp.com",
  projectId: "recipie-hunter",
  storageBucket: "recipie-hunter.appspot.com",
  messagingSenderId: "640341303733",
  appId: "1:640341303733:web:78be001e67803e347439fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app