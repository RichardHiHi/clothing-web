import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBVtpcKsUHA-Tl2E9yaktha_YqAN87CK0A',
  authDomain: 'clothing-web-5aa74.firebaseapp.com',
  projectId: 'clothing-web-5aa74',
  storageBucket: 'clothing-web-5aa74.appspot.com',
  messagingSenderId: '590502839435',
  appId: '1:590502839435:web:771b15aab27deb5007408e',
  measurementId: 'G-TQ8KV5D9MD',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
