import React from 'react';
import {
     TouchableOpacity,TouchableNativeFeedback, Text, View, StyleSheet ,Platform} from 'react-native';
const buttonWithBackground = props => {
 
    
    const content=(
        
        <View style={[styles.button]}>
        <Text style={styles.textStyle}>{props.children}</Text>
    </View>
    );
    if(Platform.OS==='android'){
        return(
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        );
    }
    return(
        <TouchableOpacity onPress={props.onPress}>
        {content}
        </TouchableOpacity>
    ); 
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        
        backgroundColor:"#00ACC1"
    },
    textStyle:{
        textAlign: 'center',
        color:"white",
        justifyContent:"center"

    }
});

export default buttonWithBackground;