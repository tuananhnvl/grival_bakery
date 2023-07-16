import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBAg-W3OBrI90HFbG4tdRQDlqUC_FTMyWQ",
    authDomain: "app-manager-f6338.firebaseapp.com",
    projectId: "app-manager-f6338",
    storageBucket: "app-manager-f6338.appspot.com",
    messagingSenderId: "993197392150",
    appId: "1:993197392150:web:a6c45a0fa4be160e8d5037",
    measurementId: "G-X6MD4YS4M4"
  };
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();

  export {app,db, storage}