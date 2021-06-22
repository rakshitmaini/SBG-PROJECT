import firebase from "firebase/app";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyAMzelZguq4Wnxo5mxAzp-QWrf-2eH8yA0",
  authDomain: "shri-balaji-global.firebaseapp.com",
  databaseURL: "https://shri-balaji-global.firebaseio.com",
  projectId: "shri-balaji-global",
  storageBucket: "shri-balaji-global.appspot.com",
  messagingSenderId: "396689011025",
  appId: "1:396689011025:web:f782a328cafa8ca05fa370",
  measurementId: "G-S0R04KFYDP",
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

// firebase.analytics();

const firestore = firebase.firestore();

export { firestore, firebase as default };
