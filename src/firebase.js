import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAPvoF-xjOe7iy9yW9rK5ChuhiouHwJQYQ",
    authDomain: "e-commerce-b4b32.firebaseapp.com",
    projectId: "e-commerce-b4b32",
    storageBucket: "e-commerce-b4b32.appspot.com",
    messagingSenderId: "99962724641",
    appId: "1:99962724641:web:a5a1430b63f1da58a95e60",
    measurementId: "G-NB1MYF1030"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };