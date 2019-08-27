import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBw67MA92N8Do4YsiFrMIerZ0NN22RYHmA",
  authDomain: "crwn-db-f1a11.firebaseapp.com",
  databaseURL: "https://crwn-db-f1a11.firebaseio.com",
  projectId: "crwn-db-f1a11",
  storageBucket: "",
  messagingSenderId: "1097897089231",
  appId: "1:1097897089231:web:8f41b0d9765eac1d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
