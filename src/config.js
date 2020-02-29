import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA50nGsCu10gsn47y-v2CShQ1jDh8NZQnc",
    authDomain: "users-84859.firebaseapp.com",
    databaseURL: "https://users-84859.firebaseio.com",
    projectId: "users-84859",
    storageBucket: "users-84859.appspot.com",
    messagingSenderId: "274158887745",
    appId: "1:274158887745:web:e4c1c2279d4733d85bf7c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;