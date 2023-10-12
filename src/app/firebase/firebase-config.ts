import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.FIREBASE_API_KEY!,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN!,
    databaseURL: process.env.FIREBASE_DATABASE_URL!,
    projectId: process.env.FIREBASE_PROJECT_ID!,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.FIREBASE_APP_ID!,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID!,
};

// const firebaseConfig: FirebaseOptions = {
//     apiKey: "AIzaSyD09YWiA9PTpK7-HcmfWFTgxt4M4imEYcc",
//     authDomain: "song-book-40ccf.firebaseapp.com",
//     databaseURL: "https://song-book-40ccf-default-rtdb.firebaseio.com",
//     projectId: "song-book-40ccf",
//     storageBucket: "song-book-40ccf.appspot.com",
//     messagingSenderId: "819412329589",
//     appId: "1:819412329589:web:9a42ca5dce229c2b4cc43c",
//     measurementId: "G-HNKEGC21B",
// };

//console.log(firebaseConfig)
const app: FirebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(app);