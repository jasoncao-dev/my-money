import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCTRolfbzqZHYOavIrPpz53ylVxU_MC1ss",
    authDomain: "mymoney-proj.firebaseapp.com",
    projectId: "mymoney-proj",
    storageBucket: "mymoney-proj.appspot.com",
    messagingSenderId: "693694358908",
    appId: "1:693694358908:web:ba9605218ff122ecdc70f9"
}

// Initialize firebase
firebase.initializeApp(firebaseConfig)

// Initialize services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// Timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }