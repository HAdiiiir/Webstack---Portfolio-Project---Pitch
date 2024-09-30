// src/firebase.ts
import firebase from 'firebase/app'; // Import the Firebase core library
import 'firebase/auth'; // Import Firebase Authentication module

// Firebase configuration object containing your app's Firebase project settings
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Your API key
  authDomain: "YOUR_AUTH_DOMAIN", // Your Auth domain
  projectId: "YOUR_PROJECT_ID", // Your project ID
  storageBucket: "YOUR_STORAGE_BUCKET", // Your storage bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Your messaging sender ID
  appId: "YOUR_APP_ID" // Your app ID
};

// Initialize Firebase with the configuration settings
firebase.initializeApp(firebaseConfig);

// Export the Firebase authentication module
export const auth = firebase.auth();
// Export Google authentication provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// Export Facebook authentication provider
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
