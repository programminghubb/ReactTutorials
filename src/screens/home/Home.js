import React,{Component} from 'react';
import {StyleSheet,Text,View,Animated,Button,TouchableOpacity,TouchableHighlight} from 'react-native';

import {connect} from 'react-redux';
import FeedList from '../../components/FeedList/FeedList'
import {getFeeds} from '../../redux/actions/index'

class Home extends Component{
    
    state={
      feedLoaded:false,

    }
  
    componentDidMount(){
     console.log("inside component mounted in Home screen")
     this.props.onLoadFeeds();
     this.loadFeed(); 
    }

    loadFeed = () => {
      console.log("inside place search");
        this.setState({
          feedLoaded: true
        }); 
    
    };
  
    render(){
         let content=(
        <View></View>
   );

          if(this.state.feedLoaded){
            content = (
              <FeedList
                 feeds={this.props.feeds}>
                </FeedList>
            );
          }
          
          return(
            <View>
              {content}
           </View>
        );
    }
    
}

const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    searchButton: {
      borderColor: "orange",
      borderWidth: 3,
      borderRadius: 50,
      padding: 20
    },
    searchButtonText: {
      color: "orange",
      fontWeight: "bold",
      fontSize: 26
    }
  });

 const mapStateToProps = (state) => {
   console.log("inside map state to props");
    return {
      feeds:state.feeds.feeds,
      
    };

}


const mapDispatchToProps=dispatch=>{
  console.log("inside map dispatch to props")

  return{
    onLoadFeeds:()=>dispatch(getFeeds())
  };
};
  

 
export default  connect(mapStateToProps,mapDispatchToProps) (Home);