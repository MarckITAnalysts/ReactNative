import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import 'firebase/compat/storage'
// import { getFirestore, collection, addDoc } from "firebase/compat/app"


const firebaseConfig = {
  apiKey: "AIzaSyDu2VnXZNkMoVwUJpKEq9UDzsbSkWw8BCk",
  authDomain: "zomato-4455c.firebaseapp.com",
  projectId: "zomato-4455c",
  storageBucket: "zomato-4455c.appspot.com",
  messagingSenderId: "812189796679",
  appId: "1:812189796679:web:e2f4e9170118205521e462",
  measurementId: "G-T0XFV7B6F1"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalAutoDetectLongPolling: true, merge: true })
}






// const storage = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref()
const db = firebase.firestore();
// db.settings({
//   experimentalForceLongPolling: true,

// })


export { firebase, db, storage, storageRef }; 