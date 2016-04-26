'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';

import Button from '../components/button';
import Header from '../components/header';

import Login from './login';

import styles from '../styles/common-styles.js';

import Firebase from 'firebase';

let app = new Firebase("https://fbauthenticate.firebaseio.com/");
