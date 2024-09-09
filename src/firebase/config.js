import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCB4UvT5En8I77gOeCJoNJdP2swzIs2M4s",
    authDomain: "fir-f14eb.firebaseapp.com",
    projectId: "fir-f14eb",
    storageBucket: "fir-f14eb.appspot.com",
    messagingSenderId: "699703804517",
    appId: "1:699703804517:web:1334ea06a0e021985bbc8c",
    measurementId: "G-19Q5DEBPRB"
  };
const firebaseApp=initializeApp(firebaseConfig);

const auth= getAuth(firebaseApp)
const firestore=getFirestore(firebaseApp)
const storage=getStorage(firebaseApp)

export {auth,firestore,storage}