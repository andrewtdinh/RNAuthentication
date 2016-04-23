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
  signup(){

    this.setState({
      loaded: false
    });

    app.createUser({
      'email': this.state.email,
      'password': this.state.password
    }, (error, userData) => {

      if(error){
        switch(error.code){

          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert("Error creating user:");
        }

      }else{
        alert('Your account was created!');
      }

      this.setState({
        email: '',
        password: '',
        loaded: true
      });
    });
  }

  goToLogin(){
    this.props.navigator.push({
      component: Login
    });
  }
}
