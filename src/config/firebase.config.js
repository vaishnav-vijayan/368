import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7_KL8mqNZkJG2EYnfXkMrRADCSstGQ9Q",
    authDomain: "quora-b41a4.firebaseapp.com",
    projectId: "quora-b41a4",
    storageBucket: "quora-b41a4.appspot.com",
    messagingSenderId: "269122240555",
    appId: "1:269122240555:web:c4d0f6e117b979f775ea6e",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

const db = app.firestore();

export default db;