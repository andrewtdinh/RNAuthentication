'use strict';

import React, {
  AppRegistry,
  Component,
  Text,
  TextInput,
  View
} from 'react-native';

import Button from '../components/button';
import Header from '../components/header';

import Login from './login';

import Firebase from 'firebase';

let app = new Firebase("YOUR-FIREBASE-APP-URL");

import styles from '../styles/common-styles.js';

export default class signup extends Component {

  constructor(props){
    super(props);

    this.state = {
      loaded: true,
      email: '',
      password: ''
    };
  }
}
