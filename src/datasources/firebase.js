import firebase from "firebase/app";
import "firebase/auth";

const oFirebase = firebase.initializeApp({
  apiKey: "AIzaSyDFWBN-FGLlJZs6XoZfhBvD58B_ChIP-2A",
  authDomain: "pwa-login-auth-21e52.firebaseapp.com",
});

export const oFirebaseAuth = oFirebase.auth();
