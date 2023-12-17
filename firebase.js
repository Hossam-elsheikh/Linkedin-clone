import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyDcA42zAnRBzAV2-fL6UFAEq69YTfqSrzk",
    authDomain: "linkedin-d773a.firebaseapp.com",
    projectId: "linkedin-d773a",
    storageBucket: "linkedin-d773a.appspot.com",
    messagingSenderId: "495576724900",
    appId: "1:495576724900:web:4ceb1c6e016b2d07c87d31"
  };

  const firebaseApp = initializeApp(firebaseConfig) 
  export const db = firebaseApp.firestore()
  export const auth = firebaseApp.auth()