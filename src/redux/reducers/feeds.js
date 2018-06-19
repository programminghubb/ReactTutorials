import {SET_FEEDS} from '../actions/actionTypes';


const initialState={
    feeds:[]
};
const reducer=(state=initialState,action)=>{
    console.log("inside the reducer");
    switch(action.type){
        case SET_FEEDS:{
            console.log("inside set feeds");
        return{
            ...state,
            feeds:action.feeds
        };
        break;
    }
        default:
        return state;
    }
};
export default reducer;