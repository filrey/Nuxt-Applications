import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyCIm7NWxklRKKHuZ7HT0Cw6tPW3_15WNxY',
    authDomain: 'hrpaintingservices-23bcb.firebaseapp.com',
    databaseURL: 'https://hrpaintingservices-23bcb.firebaseio.com',
    projectId: 'hrpaintingservices-23bcb',
    storageBucket: 'hrpaintingservices-23bcb.appspot.com',
    messagingSenderId: '597304551474',
    appId: '1:597304551474:web:8f774f5563a20dae38342b'
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
