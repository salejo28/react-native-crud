import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD4rRZG8BFoZtY0XQ_PgD2d7h4K56MB0lM",
    authDomain: "react-native-firebase-de6fc.firebaseapp.com",
    databaseURL: "https://react-native-firebase-de6fc.firebaseio.com",
    projectId: "react-native-firebase-de6fc",
    storageBucket: "react-native-firebase-de6fc.appspot.com",
    messagingSenderId: "891398323953",
    appId: "1:891398323953:web:00b82747f01a18a3877350"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db
}