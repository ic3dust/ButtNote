import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnTBWIhyDHB_v1m89uBOgWtYBnO-mBCf8",
  authDomain: "buttnote-4cab7.firebaseapp.com",
  projectId: "buttnote-4cab7",
  storageBucket: "buttnote-4cab7.firebasestorage.app",
  messagingSenderId: "616809573668",
  appId: "1:616809573668:web:d2abc820d15317cdd797b1",
  measurementId: "G-JK494ELQD0"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

export { auth, provider };
export default db;