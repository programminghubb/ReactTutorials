import {createStore,
combineReducers,
compose,
applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import feedsReducer from './reducers/feeds';
import uiReducer from './reducers/ui';

const rootReducer=combineReducers({
    feeds:feedsReducer,
    ui:uiReducer
});

let composeEnhancers=compose;


if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  
  const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  };
  
  export default configureStore;