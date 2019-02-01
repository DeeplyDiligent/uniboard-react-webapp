import firebase from "firebase";

class Database {

    constructor(){
        let config = {
            apiKey: "AIzaSyDummAaSk7h1T1AuC2BsU8zhTAH3H4tVNg",
            authDomain: "synopsis-465b0.firebaseapp.com",
            databaseURL: "https://synopsis-465b0.firebaseio.com",
            projectId: "synopsis-465b0",
            storageBucket: "synopsis-465b0.appspot.com",
            messagingSenderId: "1062729892729"
          };
        firebase.initializeApp(config);

        this.db = firebase.firestore();

        // Disable deprecated features
        this.db.settings({
        timestampsInSnapshots: true
        });
        //firebase.auth().onAuthStateChanged(this.changeAuthState);
    }

    async createDataDictFromUserId(uid){
        let databaseId = await this.getDatabaseIdFromUserId(uid)
        let rawData = await this._getDictFromDatabaseId(databaseId);
        if (rawData){
            delete rawData['date'];
            let dict = {};
            for(const courseName in rawData){
                const courseDict = rawData[courseName];
                dict[courseName] = this._parseCourse(courseDict);
                //dict[courseName]["unitCode"] = this.shortenName(courseName);
            }
            return dict;
        }
        return false;   
    }

    async getDatabaseIdFromUserId(uid){
        let id = await this.db.collection("authidLinking").doc(uid).get();
        return id.data().databaseID;
    }

    _parseCourse(courseDict){
        let weeks = {};
        for(const id in courseDict){
            const item = courseDict[id]
            if(id.startsWith('expandable')){
                let week = {
                    'name': item['text'],
                    'links': item['children'].map(
                        link_id => this.__parseLink(courseDict[link_id])),
                    'type': 'week'
                };

                weeks[id] = week;
            }
        }
        return weeks;
    }

    __parseLink(linkDict){
        let dict = {
            'name': linkDict['text'],
            'url': linkDict['link'],
            'type': 'link',
            'linktype': linkDict['imgAlt'] // use alt-text
        }
        return dict;
    }


    async _getDictFromDatabaseId(databaseId){
        let x = await this.db.collection('dba').doc(databaseId).get();
        return x.data();
    }

    setAuthStateChangedCallback(callback){
        firebase.auth().onAuthStateChanged(callback);
    }

    shortenName(nameOfSubject){
        var matches = nameOfSubject.match(/\w{3}\d{4}/g);
        if (matches != null) {
            nameOfSubject = matches[0];
        }
        return nameOfSubject
    }


}

 const database = new Database();
 Object.freeze(database);
export default database;