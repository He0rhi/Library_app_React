import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ2bvy9KZJsB9mtueNLXiuM3rT-PUIk_w",
  authDomain: "library-app-hvash.firebaseapp.com",
  projectId: "library-app-hvash",
  storageBucket: "library-app-hvash.appspot.com",
  messagingSenderId: "235183796694",
  appId: "1:235183796694:web:7f7d241852f266c6907477"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export  {auth};