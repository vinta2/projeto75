import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAly9LKtTx_EAZ6aeMVG23fP1DBt1jojgg",
  authDomain: "projeto-75-5dd2a.firebaseapp.com",
  projectId: "projeto-75-5dd2a",
  storageBucket: "projeto-75-5dd2a.appspot.com",
  messagingSenderId: "502910640806",
  appId: "1:502910640806:web:5fe20a76f0a72062050a67"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
