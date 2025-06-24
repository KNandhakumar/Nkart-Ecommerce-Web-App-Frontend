// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCj-ialXlICHn_aGgzP2FQIrH3_2HkxY-c",
  authDomain: "nkart-auth.firebaseapp.com",
  projectId: "nkart-auth",
  storageBucket: "nkart-auth.firebasestorage.app",
  messagingSenderId: "865142237747",
  appId: "1:865142237747:web:08f7def06d394adc215146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);