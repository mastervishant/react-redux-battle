import { GET_LANG,LANG_ERROR } from "../actions/types";
const initialState={
   lang_obj:null,
    error:{}
}

export default function(state=initialState,action){
  const {type,payload}=action;
  switch(type){
    case GET_LANG:
        return {...state,lang_obj:payload}
    case LANG_ERROR:
        return {...state,error:payload}
   
    default:
        return state;
  }
    }

