/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnxbfYr1NP2H9VPrMXDl-IBEzyMH1dGzQ",
  authDomain: "friendlychat-d39a0.firebaseapp.com",
  projectId: "friendlychat-d39a0",
  storageBucket: "friendlychat-d39a0.appspot.com",
  messagingSenderId: "184399605670",
  appId: "1:184399605670:web:80bc5cb362402756d92967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);