import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCChtvkTTVMkeGFKFseLd12TV--pQ1IR0Y",
    authDomain: "todo-app-9393c.firebaseapp.com",
    databaseURL: "https://todo-app-9393c.firebaseio.com",
    projectId: "todo-app-9393c",
    storageBucket: "todo-app-9393c.appspot.com",
    messagingSenderId: "729085157941",
    appId: "1:729085157941:web:c019fba5081d369e45077c",
    measurementId: "G-TXWD7HZ613"
})

const db = firebaseApp.firestore();

export default db;