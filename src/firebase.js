import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQFSYRehp1_MPfcFYHgbAYF-WGjZ_lvkA",
  authDomain: "linkedin-a9cba.firebaseapp.com",
  projectId: "linkedin-a9cba",
  storageBucket: "linkedin-a9cba.appspot.com",
  messagingSenderId: "332814701268",
  appId: "1:332814701268:web:2e4f2ce7ff108b6a036141",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
