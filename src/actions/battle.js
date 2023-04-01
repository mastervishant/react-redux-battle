import axios from "axios";
import { GET_USER,GET_USER_ERROR ,RESET_USER,START_BATTLE} from "./types";

export const getUserResult= function (user1,user2){
    return async dispatch=>{
        try {
           
            const res1= await axios.get("https://api.github.com/users/"+user1);
            const res2= await axios.get("https://api.github.com/users/"+user2);
            dispatch({
                type:GET_USER,
                payload:{user1:res1.data,user2:res2.data}
            })
        } catch (error) {   
            dispatch({
                type:GET_USER_ERROR,
                payload:{msg:error.response.statusText,status:error.response.status}
            });
        }
    }
}

export const startBattle=function(){
    return async dispatch=>{
    dispatch({
        type:START_BATTLE
    })
}
}
export const resetUserResult=function(){
    return async dispatch=>{
        dispatch({
            type:RESET_USER
        })
    }
}