// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: "pet-adopt-591ac.firebaseapp.com",
    projectId: "pet-adopt-591ac",
    storageBucket: "pet-adopt-591ac.firebasestorage.app",
    messagingSenderId: "1008085393118",
    appId: "1:1008085393118:web:99d1a4c90dc06eb83e2c4f",
    measurementId: "G-ZQFF8CB9SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);