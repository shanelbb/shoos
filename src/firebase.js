import firebase from 'firebase/app';
import 'firebase/database';
 
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAQ0Y_vjD-VO3ROcF-J6UCI2KMfpIJVox8",
    authDomain: "shoos-a7f24.firebaseapp.com",
    projectId: "shoos-a7f24",
    storageBucket: "shoos-a7f24.appspot.com",
    messagingSenderId: "52018516245",
    appId: "1:52018516245:web:7f9bca7964df1d610c591c"
  };
 
  firebase.initializeApp(firebaseConfig);

  export default firebase;