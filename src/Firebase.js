import app from 'firebase/app';

var config = {
    apiKey: "AIzaSyDummAaSk7h1T1AuC2BsU8zhTAH3H4tVNg",
    authDomain: "synopsis-465b0.firebaseapp.com",
    databaseURL: "https://synopsis-465b0.firebaseio.com",
    projectId: "synopsis-465b0",
    storageBucket: "synopsis-465b0.appspot.com",
    messagingSenderId: "1062729892729"
};

const config =
  process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
  constructor() {
    app.initializeApp(config);
    // Initialize Cloud Firestore through Firebase
    this.db = Firebase.firestore();

    // Disable deprecated features
    this.db.settings({
        timestampsInSnapshots: true
    });
  }
}

export default Firebase;