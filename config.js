import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB7p1lTPtkiuMc6fWeRY1fc7ZLqTSbDPto",
  authDomain: "team-voting-cf6f7.firebaseapp.com",
  databaseURL: "https://team-voting-cf6f7-default-rtdb.firebaseio.com",
  projectId: "team-voting-cf6f7",
  storageBucket: "team-voting-cf6f7.appspot.com",
  messagingSenderId: "449227776370",
  appId: "1:449227776370:web:2b0808d37c7f33c2597deb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
