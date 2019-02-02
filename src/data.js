import firebase from "firebase";
import he from 'he';
import { transform } from "lodash";

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

    async createDataDictFromDatabaseId(databaseId){
        let rawData = await this._getDictFromDatabaseId(databaseId);
        if (rawData){
            delete rawData['date'];
            let dict = {};
            for(const courseName in rawData){
                const courseDict = rawData[courseName];
                dict[courseName] = this._parseCourse(courseDict);
            }
            return dict;
        }
        return false;   
    }

    async createRealtimeDataDictFromDatabaseId(databaseId){
        this.databaseRef = await this._getRealtimeRefFromDatabaseId(databaseId);
        return this;
    }

    onUpdate(func){
        this.databaseRef.onSnapshot((doc)=>{
            let rawData = doc.data()
            if (rawData){
                delete rawData['date'];
                let dict = {};
                for(const courseName in rawData){
                    const courseDict = rawData[courseName];
                    dict[courseName] = this._parseCourse(courseDict);
                }
                func(dict);
            }
        })

    }

    async getDatabaseIdFromUserId(uid){
        let id = await this.db.collection("authidLinking").doc(uid).get();
        return id.data().databaseID;
    }

    transformToFlatDict(data){
        let dataArray = [];
        transform(data, (_, value, key) => {
            let subject = key;
            transform(value, (_, value, key) =>
                value.links.map((value, key) => {
                value["subject"] = subject;
                dataArray.push(value)
                })
            );
        });
        return dataArray
    }

    _parseCourse(courseDict){
        let weeks = {};
        for(const id in courseDict){
            const item = courseDict[id]
            if(id.startsWith('expandable')){
                let items = item['children'].map(
                    link_id => this.__parseLink(courseDict[link_id]))
                let week = {
                    'name': he.decode(item['text']),
                    'files':items.filter(x => x.linktype === 'File'),
                    'folders':items.filter(x => x.linktype === 'Folder'),
                    'assignments':items.filter(x => x.linktype === 'Assignment'),
                    'quizzes':items.filter(x => x.linktype === 'Quiz'),
                    'forums':items.filter(x => x.linktype === 'Forum'),
                    'links': items.filter(x => !( ['File', 'Folder', 'Quiz', 'Assignment', 'Forum']
                        .includes(x.linktype))),
                    'type': 'week'
                };

                weeks[id] = week;
            }
        }
        return weeks;
    }

    __parseLink(linkDict){
        let dict = {
            'name': he.decode(linkDict['text']),
            'url': linkDict['link'],
            'type': 'link',
            'linktype': linkDict['imgAlt'], // use alt-text
            'iconLink': linkDict['img']
        }
        return dict;
    }


    async _getDictFromDatabaseId(databaseId){
        let x = await this.db.collection('dba').doc(databaseId).get();
        return x.data();
    }

    async _getRealtimeRefFromDatabaseId(databaseId){
        let x = await this.db.collection('dba').doc(databaseId);
        return x;
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
//  Object.freeze(database);
export default database;