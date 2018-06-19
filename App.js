/* import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,Image } from 'react-native';
import {connect} from 'react-redux';
import Login from './src/components/screens/login/Login';
import Home from './src/components/screens/home/Home';

 class App extends React.Component {
 
  
  render() {
  if(this.props.isLoggedIn)
  return <Home/>;
  else
  return <Login/>
  }
}


const mapStateToProps=(state)=>{
  console.log("inside map state to props of app.js");
  return{
    isLoggedIn:state.auth.isLoggedIn
  };
}


const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default connect(mapStateToProps)(App);
 */


import {Navigation} from 'react-native-navigation';
import Login from './src/screens/login/Login';
import Signup from './src/screens/signupScreen/Signup';
import Home from './src/screens/home/Home';
import ProfileScreen from './src/screens/profileScreen/ProfileScreen';
import {Provider} from 'react-redux';
import configureStore from './src/redux/configureStore';
const store=configureStore();

//Register screens
 Navigation.registerComponent(
   "steemittutorial.LoginScreen",
   ()=>Login,
   store,
   Provider
  );
 Navigation.registerComponent(
   "steemittutorial.HomeScreen",
   ()=>Home,
   store,
   Provider);
 Navigation.registerComponent(
   "steemittutorial.ProfileScreen",
   ()=>ProfileScreen,
   store,
   Provider);
 Navigation.registerComponent(
   "steemittutorial.SignupScreen",
   ()=>Signup,
   store,
   Provider);
 
   const navigatorStyle = {
    navBarBackgroundColor: '#000000'
  };
 //Start an app
 Navigation.startSingleScreenApp({
   screen:{
     screen:"steemittutorial.LoginScreen",
     title:"Login",
     navigatorStyle:{navigatorStyle}
     
   }
 });