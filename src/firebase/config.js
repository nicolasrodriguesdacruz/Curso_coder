// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJtGuJeu0JSkCYc-13UEbqxVEPn_KaWpw",
  authDomain: "proyecto-eccomerce-190c9.firebaseapp.com",
  projectId: "proyecto-eccomerce-190c9",
  storageBucket: "proyecto-eccomerce-190c9.appspot.com",
  messagingSenderId: "527049996890",
  appId: "1:527049996890:web:3edf1f47486d7247ffb663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);