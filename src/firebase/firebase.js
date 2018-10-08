import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref().set({
//     name: 'Andrew Mead',
//     location: {
//         city: 'NY',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref('location/city').set(null);
// database.ref('location').remove();
// database.ref().update({
//     name: 'Mike',
    // age: 20,
//     isSingle: null,
//     'location/city': 'Boston'
// })

// // get data instantly once
// database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })

// // get data when changed
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log(e);
// });

// database.ref().off();