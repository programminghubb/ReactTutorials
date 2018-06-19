import React from 'react';
import {TextInput,StyleSheet,ImageBackground,Image} from 'react-native';
import TextInputBackground from '../../assets/textinput_bg.png'

const defaultInput=props=>(
  

    <TextInput 
     underlineColorAndroid="transparent"
     {...props}
    style={[styles.validInput,props.style,!props.valid && props.touched ? styles.invalidInput : null]}
    />
    
);

const styles=StyleSheet.create({
 
   
      validInput:{
    width:"100%", 
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    marginTop: 8,
    marginBottom: 8

      },

      invalidInput: {
        backgroundColor: '#f9c0c0',
        borderColor: "red"
      }
})


export default defaultInput;