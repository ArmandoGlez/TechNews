import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDzWJ6O2h8TnNdL66bYBJvQk_YZ9BYNEiE",
    authDomain: "projectn-26865.firebaseapp.com",
    projectId: "projectn-26865",
    storageBucket: "projectn-26865.appspot.com",
    messagingSenderId: "1001975324836",
    appId: "1:1001975324836:web:9fa55b9f31058ba937c631",
    measurementId: "G-6LR3QK8LJY"
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)