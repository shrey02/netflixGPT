// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX3wE1ZqjpT-_urzPnSBiOjiMsCYopc0g",
  authDomain: "netflixgpt-1f6f5.firebaseapp.com",
  projectId: "netflixgpt-1f6f5",
  storageBucket: "netflixgpt-1f6f5.appspot.com",
  messagingSenderId: "554940693063",
  appId: "1:554940693063:web:b8af624b062b6c83940f62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


