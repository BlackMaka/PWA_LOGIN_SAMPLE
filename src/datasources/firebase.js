import firebase from "firebase/app";
import "firebase/auth";

const oFirebase = firebase.initializeApp({
  apiKey: //,
  authDomain: //,
});

export const oFirebaseAuth = oFirebase.auth();
