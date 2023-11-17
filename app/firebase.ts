// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTrPHdZPi1yqVlvHuxsNVFDStfVaZKnpw",
  authDomain: "bike-rack-lock.firebaseapp.com",
  projectId: "bike-rack-lock",
  storageBucket: "bike-rack-lock.appspot.com",
  messagingSenderId: "256671617849",
  appId: "1:256671617849:web:50c21f2326dab5b9518ee8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initializeFirestore(app, { localCache: persistentLocalCache(/*settings*/ {}) });

// Initialize Cloud Firestore and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
