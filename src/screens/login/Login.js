import React, { Component } from 'react';
import {  
    Text, 
    TextInput, 
    View,
    Button,
    StyleSheet,
    TouchableHighlight,
    ImageBackground } from 'react-native';
    
import { tryAuth } from '../../redux/actions/index';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons'
import MainTabs from '../main/MainTabs'
import Signup from '../signupScreen/Signup';
import DefaultInput from '../../components/ui/DefaultInput'
import BackgroundImage from '../../assets/login_screen_background.jpg';



import ButtonWithBackground from '../../components/ui/ButtonWithBackground/ButtonWithBackground';

class Login extends Component{

    state={
        
        username:'',
        password:''
      
    }

    loginHandler = () => {
        const authData = {
          username: this.state.username,
          password: this.state.password
        };
    this.props.onLogin(authData);
        MainTabs();
      };
    
    userSignup(val){
    
       Navigation.startSingleScreenApp({
        screen:{
          screen:"steemittutorial.SignupScreen",
          title:"Signup",
         
        }
      });
    }

    render(){
        return(
            <ImageBackground 
            style={styles.backgroundImage}
            source={BackgroundImage}>
            
            <View style={styles.loginContainer}>
            <Text  style={styles.loginText}>Login</Text>
                <View style={styles.inputContainer}>
                 <DefaultInput 
                   placeholder='Username'
                   keyboardType='email-address'
                   value={this.state.username}
                   onChangeText={(text)=>this.setState({username:text})}
                   />
                <DefaultInput 
                    placeholder='Password' 
                    secureTextEntry={true}
                    value={this.state.password} 
                     onChangeText={(text)=>this.setState({password:text})}
                  />
                  </View>

                <View style={styles.buttonContailner}>
                 <ButtonWithBackground 
                 onPress={(val)=>this.loginHandler(val)} 
                 >
                 Login
                 </ButtonWithBackground>

                
                <ButtonWithBackground
                 onPress={(val)=>this.userSignup(val)}>
                 Signup
                 </ButtonWithBackground>
                 </View>



                
               
            </View>
            </ImageBackground>
        );
    }
}

const styles=StyleSheet.create({
    loginContainer: {
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
      
    
      },
      loginText:{
        fontWeight:"bold",
        fontSize:20,
        textAlign:"left"
      },
      signupText:{
          fontSize:20,
          color:"white"
      },
      imageBackgroundButton:{

      },
    
      backgroundImage:{
        flex:1,
      

      },
      inputContainer:{
       
          width:"80%"

      },
      buttonContailner:{
          width:"80%"
         
      }
    
});



const mapDispatchToProps=dispatch=>{
   // console.log("inside dispatch state of Login.js")
    return{
        onLogin:authData => dispatch(tryAuth(authData))
    
    };
};





export default connect(null,mapDispatchToProps)(Login);