/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDnxbfYr1NP2H9VPrMXDl-IBEzyMH1dGzQ",
  authDomain: "friendlychat-d39a0.firebaseapp.com",
  projectId: "friendlychat-d39a0",
  storageBucket: "friendlychat-d39a0.appspot.com",
  messagingSenderId: "184399605670",
  appId: "1:184399605670:web:80bc5cb362402756d92967"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}