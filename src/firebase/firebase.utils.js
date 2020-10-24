import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config= {
    apiKey: "AIzaSyBf6Bev1OZkUr154KwcbbXSf5eX4_AQIcM",
    authDomain: "crwn-db-ea4c8.firebaseapp.com",
    databaseURL: "https://crwn-db-ea4c8.firebaseio.com",
    projectId: "crwn-db-ea4c8",
    storageBucket: "crwn-db-ea4c8.appspot.com",
    messagingSenderId: "1011510376360",
    appId: "1:1011510376360:web:79c203977a1fbc2ceb8f9d",
    measurementId: "G-L2FM1B59YG"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

