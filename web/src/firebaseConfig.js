import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjEQgUXTcxlh6-XgksFzMazqASV4pF-bA",
  authDomain: "read-7b616.firebaseapp.com",
  projectId: "read-7b616",
  storageBucket: "read-7b616.appspot.com",
  messagingSenderId: "695781309319",
  appId: "1:695781309319:web:ed548fff86f6543206b122"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User signed up:", user);
        })
}
const logIn = (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
}