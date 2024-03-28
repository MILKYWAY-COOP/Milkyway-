// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRlhI6beCffnU3KWGKSnIxnsBg54yXCo4",
  authDomain: "waigwa-e07e8.firebaseapp.com",
  projectId: "waigwa-e07e8",
  storageBucket: "waigwa-e07e8.appspot.com",
  messagingSenderId: "112338423494",
  appId: "1:112338423494:web:478a7199e453f168c2d1c7",
  measurementId: "G-7NWLQVKW9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);