// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase";
import { getAnalytics } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkEafL3P6R1yylVF0O44MnVLzJp25Hkts",
  authDomain: "cubix-65080.firebaseapp.com",
  projectId: "cubix-65080",
  storageBucket: "cubix-65080.appspot.com",
  messagingSenderId: "888908225125",
  appId: "1:888908225125:web:0c79d9f06542aef3bf048c",
  measurementId: "G-KNQ5RBZP1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebase.firestore();
export default firebase;