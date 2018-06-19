import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import FeedItem from '../FeedItem/FeedItem';

const feedsList=props=>{
    return(
        <FlatList
        style={styles.listContainer}
        data={props.feeds}
        renderItem={(info)=>(
            <FeedItem
              feedTitle={info.item.name}
              commentsCount={info.item.commentsCount}
              netVotes={info.item.netVotes}
              totalPayouts={info.item.totalPayouts}
              trending={info.item.trending}
            />
        )}
        >
        </FlatList>
    );
};

const styles=StyleSheet.create({
    listContainer:{
        width:"100%"
    }


});
export default feedsList;

