import { connect } from "react-redux";
import axios from "axios";
import React,{useEffect,Fragment} from 'react'
import {getLangs} from "../../actions/langs"
const Cities = ({getLangs, lang_result,filter }) => {
  const {lang,click}=filter;
  console.log(lang);
 if(click==1)
  getLangs(lang);
   
      return (lang_result.lang_obj==null?'':(<Fragment> <div className="popular">
       <ul className="popular-list">
        {lang_result.lang_obj.items.map(item => <li className="popular-item"><ul className="space-list-items">
        <li> 
          <img src={item.owner.avatar_url} className="avatar" />
          </li>
          <li ><a>{item.owner.login}</a></li>
          <li style={{textAlign:'left', fontWeight:'300'}}>{item.owner.login}</li>
          <li style={{textAlign:'left', fontWeight:'300'}}>{item.stargazers_count} stars</li>
          <li style={{textAlign:'left', fontWeight:'300'}}>{item.forks_count} forks</li>
          <li style={{textAlign:'left', fontWeight:'300'}}>{item.open_issues} open issues</li>
       
         </ul>
         </li>
      
        )}
    </ul> </div></Fragment>));
};


const mapStateToProps = state => ({
  lang_result: state.lang,
  filter:state.visibilityFilter
});

export default connect(mapStateToProps,{getLangs} )(Cities);
