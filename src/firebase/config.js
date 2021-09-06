import firebase  from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBREnktcHyJ2XS3_3jB7huJ5ErxOTQFHug",
    authDomain: "vue-blog-system-73cd4.firebaseapp.com",
    projectId: "vue-blog-system-73cd4",
    storageBucket: "vue-blog-system-73cd4.appspot.com",
    messagingSenderId: "414203111716",
    appId: "1:414203111716:web:781ff647730c0f57416bb1"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {db,timestamp,auth}; 
  