
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDZKuRvBKfTH3sUCmib5NPuehDvoXTnkxY",
  authDomain: "emailpassword-63dea.firebaseapp.com",
  projectId: "emailpassword-63dea",
  storageBucket: "emailpassword-63dea.appspot.com",
  messagingSenderId: "857386911318",
  appId: "1:857386911318:web:2ed87482423ee6bc381df7"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);


 
export const database = getAuth(app)