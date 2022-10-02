import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// WARN You wouldn't normally do this, but since this is a demo, it's fine
const firebaseConfig = {
  apiKey: "AIzaSyDW-50Oa38oRhEouGIu7LrZlJnsL1Ososs",
  authDomain: "arekya-ffadc.firebaseapp.com",
  projectId: "arekya-ffadc",
  storageBucket: "arekya-ffadc.appspot.com",
  messagingSenderId: "20091574470",
  appId: "1:20091574470:web:027ef6e78b748e91561fc7",
  measurementId: "G-MZZ8T8N1J2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// connectAuthEmulator(auth, "http://localhost:9099");
// connectFirestoreEmulator(db, "localhost", 8080);

export default app;
