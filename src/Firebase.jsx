// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjlwlV6G7j3jwJTjXYEU-HAe_xXECq0xk",
  authDomain: "carrent-fac91.firebaseapp.com",
  databaseURL: "https://carrent-fac91-default-rtdb.firebaseio.com",
  projectId: "carrent-fac91",
  storageBucket: "carrent-fac91.appspot.com",
  messagingSenderId: "190033382605",
  appId: "1:190033382605:web:c5d0b79a9a8f354b762d84"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

export { db };