

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBAfvTHdNgM24MOa_MJatd9Y0TpUdHoSmY",
    authDomain: "clone-gmk.firebaseapp.com",
    projectId: "clone-gmk",
    storageBucket: "clone-gmk.appspot.com",
    messagingSenderId: "1083792848047",
    appId: "1:1083792848047:web:58ba555976942dd103d05a",
    measurementId: "${config.measurementId}"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage =firebase.storage();

// export { auth,provider,storage};
export { db, auth, provider } ;