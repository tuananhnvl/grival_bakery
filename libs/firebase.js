import firebase from 'firebase/app';
import "firebase/firestore";

/* const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}; */
const firebaseConfig = {
    apiKey: "AIzaSyBAg-W3OBrI90HFbG4tdRQDlqUC_FTMyWQ",
    authDomain: "app-manager-f6338.firebaseapp.com",
    projectId: "app-manager-f6338",
    storageBucket: "app-manager-f6338.appspot.com",
    messagingSenderId: "993197392150",
    appId: "1:993197392150:web:a6c45a0fa4be160e8d5037",
    measurementId: "G-X6MD4YS4M4"
  };
  
  
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;