import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCcZmnnzJ4k9tgd_YUaCthawSN_I1iEJuM",
  authDomain: "vue-blog-ef6a3.firebaseapp.com",
  projectId: "vue-blog-ef6a3",
  storageBucket: "vue-blog-ef6a3.appspot.com",
  messagingSenderId: "496274113194",
  appId: "1:496274113194:web:ad1575e159483db80286d3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
