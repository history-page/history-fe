import * as firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY || window.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || window.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL || window.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID || window.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || window.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:
      process.env.FIREBASE_MESSAGING_SENDER_ID || window.FIREBASE_MESSAGING_SENDER_ID
  })
}

export const getCurrentUser = cb => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user && user.email) {
      return cb({
        email: user.email,
        displayName: user.displayName,
        uid: user.uid
      })
    }

    return cb(null)
  })
}
export const database = firebase.database()

export default firebase
