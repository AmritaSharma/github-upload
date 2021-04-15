import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBCvLXPD_ww7rWy0sPlXKtIW5_cHl6Af-Y",
   authDomain: "reactnativefirebase-7013c.firebaseapp.com",
   projectId: "reactnativefirebase-7013c",
   storageBucket: "reactnativefirebase-7013c.appspot.com",
   messagingSenderId: "307509902521",
   appId: "1:307509902521:web:d88702d1396b3f90bbef68"

};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
