// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOzNhW9B5Z9IrMkH7w3Ea3FU0G4er4IUU",
  authDomain: "neurohaven-538a8.firebaseapp.com",
  projectId: "neurohaven-538a8",
  storageBucket: "neurohaven-538a8.firebasestorage.app",
  messagingSenderId: "769838109097",
  appId: "1:769838109097:web:53c29e80d2354faf2c34b8",
  measurementId: "G-7323PFP27V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, auth, db };



