import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW8HCWEXUm1YtRMabQ4awzSBRagczH258",
  authDomain: "netflix-clone-62b9f.firebaseapp.com",
  projectId: "netflix-clone-62b9f",
  storageBucket: "netflix-clone-62b9f.appspot.com",
  messagingSenderId: "482797363639",
  appId: "1:482797363639:web:26d21f1b415d8604f64832",
  measurementId: "G-DRQMSH4KL6",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(); // Initialize authentication if you're using it

export { auth };
export default db;