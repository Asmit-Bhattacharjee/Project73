import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyD1elaI_boKmsMwRtOJZACTy4m_5bFiZfk",
  authDomain: "project73cycle.firebaseapp.com",
  projectId: "project73cycle",
  storageBucket: "project73cycle.appspot.com",
  messagingSenderId: "939055377571",
  appId: "1:939055377571:web:88af8ce84536e21c43a316"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

