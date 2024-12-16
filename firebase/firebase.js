// firebase.js
import { initializeApp } from '@react-native-firebase/app'; 
import firestore from '@react-native-firebase/firestore'; // for Firestore

// Firebase configuration (This should be set up automatically from google-services.json or GoogleService-Info.plist)
const firebaseConfig = {
  apiKey: "AIzaSyBw8KlQDIvcR0JNvEgBwshMoXsNZpn26vs",
  authDomain: "fitness-54d8f.firebaseapp.com",
  projectId: "fitness-54d8f",
  storageBucket: "fitness-54d8f.firebasestorage.app",
  messagingSenderId: "349671836178",
  appId: "1:349671836178:web:5ec5a09a867fee9ab266cb",
  measurementId: "G-4QYDKZ5RDL"
};

// Initialize Firebase
if (!firebase.apps.length) {
  initializeApp(firebaseConfig); // Use initializeApp instead of firebase.initializeApp
} else {
  firebase.app(); // if already initialized
}

// Export Firestore to use in other parts of your app
export { firestore };
