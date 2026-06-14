import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCp3aGEf3jftP9-dIxKM1lOVg6Ftl_Qyk4",
  authDomain: "celebare-auth.firebaseapp.com",
  projectId: "celebare-auth",
  storageBucket: "celebare-auth.firebasestorage.app",
  messagingSenderId: "56712366858",
  appId: "1:56712366858:web:832952cbb10e68291608f3",
  measurementId: "G-WRG0SVQ0TN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);