'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';

import Signup from './src/pages/signup';
import Account from './src/pages/account';

import Header from './src/components/header';

import Firebase from 'firebase';

let app = new Firebase("YOUR-FIREBASE-APP-URL");

import styles from './src/styles/common-styles.js';
