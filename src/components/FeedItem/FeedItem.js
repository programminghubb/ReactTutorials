import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';

const listItem=props=>(
    <View style={styles.listItem}>
    <Text>Title:{props.feedTitle}</Text>
    <Text>Comment count:{props.commentsCount}</Text>
    <Text>Net votes:{props.netVotes}</Text>
    <Text>Total Payout:{props.totalPayouts}</Text>
    <Text>Trending No:{props.trending}</Text>
    </View>
);

const styles=StyleSheet.create({

    listItem:{
        width:"100%",
        marginBottom:5,
        padding:10,

        backgroundColor:"#eee",
        flexDirection:"column",
        alignItems:"center"
    


    }
});

export default listItem;