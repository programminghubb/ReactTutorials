import {TRY_AUTH} from './actionTypes'


export const tryAuth = (authData) => {
    console.log("inside try auth");
    return dispatch=>{
      type: TRY_AUTH
        authData: authData
    };
};



/* 
const wif = steem.auth.toWif("rojina", "P5JoumS3YwPYyEu5nBqKs3mNY9JhF9ZUukjMezQ92dM3EN6TR4Po", [
    "posting"
  ]);
  console.log(wif);
  dispatch(login(authData)); */