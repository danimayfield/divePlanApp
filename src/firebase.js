import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBXR2cPLuBbDaYbAHXL1156zr0j4mIYnsg",
    authDomain: "mydiveplanapp.firebaseapp.com",
    projectId: "mydiveplanapp",
    storageBucket: "mydiveplanapp.appspot.com",
    messagingSenderId: "754406473260",
    appId: "1:754406473260:web:98a886ba16c1b7d5839b89"
  };

firebase.initializeApp(firebaseConfig)
export default firebase;