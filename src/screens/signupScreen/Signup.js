import {  Text, 
    TextInput, 
    View,
    Button,
    StyleSheet,
    Dimensions,
    ImageBackground} from 'react-native';
import React,{Component} from 'react';
import BackgroundImage from '../../assets/login_screen_background.jpg';
import DefaultInput from '../../components/ui/DefaultInput'
import validate from '../../utility/validation';
import ButtonWithBackground from '../../components/ui/ButtonWithBackground/ButtonWithBackground';


class Signup extends Component{
   

     state={
         viewMode:Dimensions.get('window').height>500?"potrait":"landscape",
         controls:{
            email: {
              value: "",
              valid: false,
              validationRules: {
                isEmail: true
              },
              touched: false
            },
            name:{
                value:"",
                valid:false,
                validationRules:{
                    containesLetterAndNumber:true

                },
                touched:false
            },
            password: {
              value: "",
              valid: false,
              validationRules: {
                minLength: 6
              },
              touched: false
            },
            confirmPassword: {
              value: "",
              valid: false,
              validationRules: {
                equalTo: "password"
              },
              touched: false
            }
          }
     };


     updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
          const equalControl = this.state.controls[key].validationRules.equalTo;
          const equalValue = this.state.controls[equalControl].value;
          connectedValue = {
            ...connectedValue,
            equalTo: equalValue
          };
        }
        if (key === "password") {
          connectedValue = {
            ...connectedValue,
            equalTo: value
          };
        }
        this.setState(prevState => {
          return {
            controls: {
              ...prevState.controls,
              confirmPassword: {
                ...prevState.controls.confirmPassword,
                valid:
                  key === "password"
                    ? validate(
                        prevState.controls.confirmPassword.value,
                        prevState.controls.confirmPassword.validationRules,
                        connectedValue
                      )
                    : prevState.controls.confirmPassword.valid
              },
              [key]: {
                ...prevState.controls[key],
                value: value,
                valid: validate(
                  value,
                  prevState.controls[key].validationRules,
                  connectedValue
                ),
                touched: true
              }
            }
          };
        });
      };

     constructor(props){
         super(props);
         Dimensions.addEventListener("change",this.updateStyles);
     }

     componentWillUnmount(){
         Dimensions.removeEventListener("change",this.updateStyles)
     }
     updateStyles=(dims)=>{
        this.setState({
          viewMode:
          dims.window.height>500?"potrait":"landscape"
        });  
      }

   render(){
       return(
        <ImageBackground 
        style={styles.backgroundImage}
        source={BackgroundImage}>
        <View style={styles.signupContainer}>
            <Text>Please Signup</Text>
            <View style={styles.inputContainer}>
             <DefaultInput 
               placeholder='Email'
               style={styles.input}
               value={this.state.controls.email.value}
               onChangeText={(val)=>{this.updateInputState('email',val)}}
               valid={this.state.controls.email.valid}
               touched={this.state.controls.email.touched}
               keyboardType='email-address'
               
            
               />
             <DefaultInput 
               placeholder='Name'
               style={styles.input}
               value={this.state.controls.name.value}
               onChangeText={(val)=>{this.updateInputState('name',val)}}
               valid={this.state.controls.name.valid}
               touched={this.state.controls.name.touched}
               />
               <View style={this.state.viewMode==='potrait'
               ?styles.passwordContainerPotrait
               :styles.passwordContainerLandscape}>
               <View
                style={this.state.viewMode==='potrait'
                ?styles.passwordWrapperPotrait
                :styles.passwordWrapperLandscape}>
          
            <DefaultInput 
                placeholder='Password' 
                style={styles.input}
                secureTextEntry={true}
                value={this.state.controls.password.value}
                
                onChangeText={(val)=>{this.updateInputState('password',val)}}
                valid={this.state.controls.password.valid}
                touched={this.state.controls.password.touched}
        
              />
              </View>
              <View
               style={this.state.viewMode==='potrait'
               ?styles.passwordWrapperPotrait
               :styles.passwordWrapperLandscape}
               >
              <DefaultInput 
                placeholder='Confirm Password' 
                style={styles.input}
                secureTextEntry={true}
                value={this.state.controls.confirmPassword.value}
                onChangeText={(val)=>{this.updateInputState('confirmPassword',val)}}
                valid={this.state.controls.confirmPassword.valid}
                touched={this.state.controls.confirmPassword.touched}
                
              />
              </View>
              </View>

              </View>
             <ButtonWithBackground

             onPress={(val)=>this.userSignUp(val)} 
            >
            Signup
            </ButtonWithBackground>

           
        </View>
        </ImageBackground>
       );
   }
}
const styles=StyleSheet.create({
    passwordContainerPotrait:{
        flexDirection:'column',
        justifyContent:"flex-start"
    },
    passwordContainerLandscape:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    passwordWrapperPotrait:{
        width:"100%"
    },
    passwordWrapperLandscape:{
        width:"45%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
      },
   signupContainer: {
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center"
    
      },
      imageBackgroundButton:{

      },
      backgroundImage:{
        flex:1,
      

      },
      inputContainer:{
       
          width:"80%"

      },
    
})

export default Signup;
