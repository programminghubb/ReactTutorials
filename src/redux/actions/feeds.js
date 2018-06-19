import {SET_FEEDS} from './actionTypes';
import {uiStartLoading,uiStopLoading} from './index'

export const getFeeds=()=>{
    console.log("inside getting feeds");
    return dispatch=> {
            fetch("https://api.steemjs.com/getTrendingTags?afterTag=funny&limit=10")
            .catch((err)=>{
                alert("Something went wrong :/");
                console.log(err);
                console.log("inside error")
        })
            .then((res)=> res.json())
    
            .then(resp=>{
                //dispatch(setFeeds(feeds));
                console.log("inside second response")
                console.log(resp)
                const feeds=[];
                for(let key in resp){
                    console.log("inside for loop")
                    feeds.push({
                        ...resp[key],
                        name:resp[key].name,
                        totalPayout:resp[key].total_payouts,
                        commentsCount:resp[key].comments,
                        netVotes:resp[key].net_votes,
                        trending:resp[key].trending

                    });
                }
                dispatch(setFeeds(feeds));
             console.log("size is:"+feeds.length)
             console.log("elemenet is:"+feeds[0].name+", total payout is:"+feeds[0].total_payouts);
               
            });
    };


};

export const setFeeds=feeds=>{
    console.log("inside setting feeds");
    return{
        type:SET_FEEDS,
        feeds:feeds
    };
};