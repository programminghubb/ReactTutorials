import React,{Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

import MainTabs from '../main/MainTabs';

class Test extends Component{

    loginHandler=()=>{
        MainTabs();
    }
    render(){
        return(
            <View>
                <Text>Welcome to the test Screensss</Text>
                <Button title="Login" onPress={this.loginHandler}/>
            
            </View>
      
        );
    }
}
export default Test;