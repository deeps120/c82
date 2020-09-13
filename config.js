import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAznUXJn_w6A2Pn2t21gBUYvI-Qb0fsh5A",
    authDomain: "booksanta-6512d.firebaseapp.com",
    databaseURL: "https://booksanta-6512d.firebaseio.com",
    projectId: "booksanta-6512d",
    storageBucket: "booksanta-6512d.appspot.com",
    messagingSenderId: "665961141279",
    appId: "1:665961141279:web:2be896598d3f0a7c97312a",
    measurementId: "G-0RY24XN6YJ"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
