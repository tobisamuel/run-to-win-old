// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrGoIyl8gbdCG68lqWg8B8FtgWW9mGaPs",
  authDomain: "run-to-win-fitness.firebaseapp.com",
  projectId: "run-to-win-fitness",
  storageBucket: "run-to-win-fitness.appspot.com",
  messagingSenderId: "347512533362",
  appId: "1:347512533362:web:9971114f0cbfded25cadeb",
  measurementId: "G-812EB3W78Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
