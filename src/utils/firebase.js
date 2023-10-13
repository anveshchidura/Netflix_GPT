// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// compat packages are API compatible with namespaced code
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfPmomBfsNsz5B_Goe4AfdTM4mkS7qyC8",
  authDomain: "netflix-gpt-82356.firebaseapp.com",
  projectId: "netflix-gpt-82356",
  storageBucket: "netflix-gpt-82356.appspot.com",
  messagingSenderId: "17167829478",
  appId: "1:17167829478:web:0604230201942772202e27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();