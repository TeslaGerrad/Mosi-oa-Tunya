// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJm5OKyh3NqEE60l4mLUE6SGYH8bhdP7Y",
  authDomain: "mosi-oa-tunya.firebaseapp.com",
  projectId: "mosi-oa-tunya",
  storageBucket: "mosi-oa-tunya.appspot.com",
  messagingSenderId: "713155353759",
  appId: "1:713155353759:web:fe01e0cd91e99ef37b16aa",
  measurementId: "G-D8TYJ8SMWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)