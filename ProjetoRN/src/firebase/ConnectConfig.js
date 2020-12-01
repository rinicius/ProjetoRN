import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBpuNV0kAMYCIrJnjPu0BKIMcbyowle3g4",
  authDomain: "projetorn-fb.firebaseapp.com",
  databaseURL: "https://projetorn-fb.firebaseio.com",
  projectId: "projetorn-fb",
  storageBucket: "projetorn-fb.appspot.com",
  messagingSenderId: "97949513238",
  appId: "1:97949513238:web:5a32274149d2c4dcb7a737",
  measurementId: "G-7F0RWEXV22",
};

var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();
