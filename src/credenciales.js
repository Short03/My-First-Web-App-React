// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyphsUuO0y_S8nXyvwaiADoz8q6B3FQ3E",
  authDomain: "loggin-as.firebaseapp.com",
  projectId: "loggin-as",
  storageBucket: "loggin-as.appspot.com",
  messagingSenderId: "548966799626",
  appId: "1:548966799626:web:46ec433d57ffa59ac902f3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;