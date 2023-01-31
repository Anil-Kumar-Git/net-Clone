// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZ_Hm8ld7aQzdodI4JPvERzs3WtQpAaOM",
    authDomain: "net-clone-8b651.firebaseapp.com",
    projectId: "net-clone-8b651",
    storageBucket: "net-clone-8b651.appspot.com",
    messagingSenderId: "1074547751801",
    appId: "1:1074547751801:web:07cbb7d6ea3524e5ab4da8"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }