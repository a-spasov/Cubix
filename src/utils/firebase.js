import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9qGSt7EvCekH-EKKDM-ez-D_fJdu3s-A",  
    authDomain: "cubix-4ba01.firebaseapp.com",
    projectId: "cubix-4ba01", 
    storageBucket: "cubix-4ba01.appspot.com",
    messagingSenderId: "947576098354", 
    appId: "1:947576098354:web:f89a5b372995c045e8b62b",
    measurementId: "G-4CML7PSSLT"
  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

