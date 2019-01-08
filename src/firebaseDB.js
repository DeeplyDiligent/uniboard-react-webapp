import Firebase from 'firebase'


class firebaseDB {
    constructor() {
        var config = {
            apiKey: "AIzaSyDummAaSk7h1T1AuC2BsU8zhTAH3H4tVNg",
            authDomain: "synopsis-465b0.firebaseapp.com",
            databaseURL: "https://synopsis-465b0.firebaseio.com",
            projectId: "synopsis-465b0",
            storageBucket: "synopsis-465b0.appspot.com",
            messagingSenderId: "1062729892729"
        };
        // Initialize Firebase
        Firebase.initializeApp(config);

        // Initialize Cloud Firestore through Firebase
        this.db = Firebase.firestore();

        // Disable deprecated features
        this.db.settings({
            timestampsInSnapshots: true
        });
        this.getDatabase = this.getDatabase.bind(this)
    }
    getDatabase(callback) {
        this.documentRef = this.db.collection("dba").doc("C4E8tg5F9hhPTE0Z2z6M")
        
        this.documentRef.get().then(function (doc) {
            if (doc.exists) {
               callback(doc.data())
            } else {
                // doc.data() will be undefined in this case
                callback ("No such document!");
            }
        })

    }
}

export default firebaseDB;