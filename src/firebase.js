// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9TJMESqawOP6NyJVozRWbAAZ4DuPHmvc",
  authDomain: "student-portal-5f2fc.firebaseapp.com",
  projectId: "student-portal-5f2fc",
  storageBucket: "student-portal-5f2fc.appspot.com",
  messagingSenderId: "38842553381",
  appId: "1:38842553381:web:73dffa054e694e9a225bcc",
  measurementId: "G-SJ040HQZ46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage();
const auth = getAuth();
const db = getFirestore();


export {
  auth,
  storage,
  db
}