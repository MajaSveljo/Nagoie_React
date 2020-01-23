// firebase/firestore and firebase/auth are automatically
// attached to the 'firebase' keyword defined above them

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCmYrokChPN-egySo_TY8rTmPTgvHczWPk",
  authDomain: "crown-database-499ba.firebaseapp.com",
  databaseURL: "https://crown-database-499ba.firebaseio.com",
  projectId: "crown-database-499ba",
  storageBucket: "crown-database-499ba.appspot.com",
  messagingSenderId: "617722472004",
  appId: "1:617722472004:web:a2d0a7d39968bd7ac1fe11",
  measurementId: "G-BTC4MWCMDD"
};

firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWtihGoogle = () => auth.signInWithPopup(provider);

export default firebase;
