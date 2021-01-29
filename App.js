import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import firebase from '@react-native-firebase/app';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './navigation/Navigator';
import Login from './screen/Login/Login';
import MyProfile from './screen/profile/MyProfile';
import Verify from './screen/Login/Verify';

const firebaseConfig = {
  apiKey: 'AIzaSyAiMAeU2Nv65wB5RQmZCMCb54T2mIaQWG0',
  authDomain: 'ppsm-app.firebaseapp.com',
  projectId: 'ppsm-app',
  storageBucket: 'ppsm-app.appspot.com',
  messagingSenderId: '727604359936',
  appId: '1:727604359936:web:16a98e9cc096d2ff5779e5',
  measurementId: 'G-04E92H1VDC',
};

if (firebase.app.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const isUserLogin = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('user login info', user);
      return <Navigator></Navigator>;
    } else {
      // No user is signed in.
      console.log('no user signed in');
    }
  });
};

const App = () => {
  useEffect(() => {
    console.log('CDM');
    SplashScreen.hide();
    // isUserLogin();
  });

  return <Navigator></Navigator>;
};

export default App;
