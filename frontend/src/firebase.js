import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3FSFvUikYymjfV-9aste66qXgMhK3BRo",
  authDomain: "demo1-463eb.firebaseapp.com",
  projectId: "demo1-463eb",
  storageBucket: "demo1-463eb.firebasestorage.app",
  messagingSenderId: "643242170939",
  appId: "1:643242170939:web:2f1daf4f07b40bf16c1a1e",
  measurementId: "G-LK9W96DGLZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
