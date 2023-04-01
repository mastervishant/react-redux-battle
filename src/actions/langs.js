import axios from "axios";
import { GET_LANG,LANG_ERROR } from "./types";

export const getLangs= function (filter){
    return async dispatch=>{

        try {
            let baseURL="https://api.github.com/search/repositories?q=stars:%3E1+language:"+(filter=="All"?'':filter)+"&sort=stars&order=desc&type=Repositories";
            const res= await axios.get(baseURL);
            dispatch({
                type:GET_LANG,
                payload:res.data
            });
            dispatch({
                type:"SET_VISIBILITY_FILTER",
                filter:{lang:filter,click:0}
            });
        } catch (error) {   
            dispatch({
                type:LANG_ERROR,
                payload:{msg:error.response.statusText,status:error.response.status}
            });
        }
    }
}