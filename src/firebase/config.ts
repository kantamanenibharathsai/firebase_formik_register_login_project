
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCrsaKKtDnXV6SPFaXwjyx6qwzm5M5xspU",
  authDomain: "signup-signin-users-data.firebaseapp.com",
  projectId: "signup-signin-users-data",
  storageBucket: "signup-signin-users-data.appspot.com",
  messagingSenderId: "223853407307",
  appId: "1:223853407307:web:efa9bc78c39ca3903631ce"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);