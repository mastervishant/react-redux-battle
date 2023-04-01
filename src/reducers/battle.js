import { GET_USER,GET_USER_ERROR,RESET_USER ,START_BATTLE} from "../actions/types";
const initialState={
   user1:null,
   user2:null,
   battle:0,
    error:{}
}

export default function(state=initialState,action){
  const {type,payload}=action;
  switch(type){
    case GET_USER:
        return {...state,user1:payload.user1,user2:payload.user2}
    case GET_USER_ERROR:
        return {...state,error:payload}
    case RESET_USER:
      return {...state,user1:null,user2:null,battle:0};
      case START_BATTLE:
        return {...state,battle:1};
    default:
        return state;
  }
    }

