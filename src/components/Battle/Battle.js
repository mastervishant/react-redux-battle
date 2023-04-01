import { connect } from "react-redux";
import axios from "axios";
import React,{useEffect,Fragment,useState} from 'react'
import {getUserResult, resetUserResult,startBattle} from "../../actions/battle"
const Battle = ({battle_result,getUserResult, resetUserResult ,startBattle}) => { 
    const [formData,setformData]=useState({
        user1:'',
        user2:''
      });
      const{user1,user2}=formData;
      const onChange=(e)=>{
       setformData({...formData,[e.target.name]:e.target.value}); 
      }
      function isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }
      const onSubmit=async (e)=>{
        e.preventDefault();
        if(!isBlank(user1)&&!isBlank(user2))
       getUserResult(user1,user2);
      }
      const onReset=async()=>{
        setformData({...formData,['user1']:'',['user2']:''}); 
        resetUserResult();
      }
      const battleStart=async()=>{
        startBattle();
      }
      if(battle_result.battle==1){
        let user1_count=0;
        let user2_count=0;
        let user1_result="";
        let user2_result="";
        parseInt(battle_result.user1.followers)>parseInt(battle_result.user2.followers)?user1_count++:user2_count++;
        parseInt(battle_result.user1.following)>parseInt(battle_result.user2.following)?user1_count++:user2_count++;
        parseInt(battle_result.user1.public_repos)>parseInt(battle_result.user2.public_repos)?user1_count++:user2_count++;
        if(user1_count>user2_count){user1_result="Winner";user2_result="Looser"}else{user1_result="Looser";user2_result="Winner"};
return(
<Fragment> <div className="row" >
<div className="">
<div className="column">
  <div className="grid_box" style={{textAlign:"center"}}>
<h1 className="header" style={{ fontWeight:'500', color:(user1_count>user2_count?'Green':'#bf3838')}}>{user1_result}</h1>

<img className="avatar" src={battle_result.user1.avatar_url} />
<h2 className="username" style={{ color:'#bf3838'}}>{battle_result.user1.login}</h2>
<ul className="space-list-items">
<li style={{fontSize:'15px',marginTop:'14px', color:'#000', textAlign:'left'}}>{battle_result.user1.login}</li>
<li style={{fontSize:'15px',marginTop:'14px',fontWeight:'300', color:'#000', textAlign:'left'}}>{battle_result.user1.following} Following</li>
<li style={{fontSize:'15px',marginTop:'14px', fontWeight:'300',color:'#000', textAlign:'left'}}>{battle_result.user1.followers} Followers</li>
<li style={{fontSize:'15px',marginTop:'14px', fontWeight:'300',color:'#000', textAlign:'left'}}>{battle_result.user1.public_repos} repositories</li>        
</ul>
</div>
</div>
</div>
<div>
<div className="column">
<div className="grid_box" style={{textAlign:"center"}}>
<h1 className="header" style={{ fontWeight:'500', color:(user2_count>user1_count?'Green':'#bf3838')}}>{user2_result}</h1>
<img className="avatar" src={battle_result.user2.avatar_url} />
<h2 className="username" style={{ color:'#bf3838'}}>{battle_result.user2.login}</h2>
<ul className="space-list-items">
<li style={{fontSize:'15px',marginTop:'14px', color:'#000', textAlign:'left'}}>{battle_result.user2.login}</li>
<li style={{fontSize:'15px',marginTop:'14px',fontWeight:'300', color:'#000', textAlign:'left'}}>{battle_result.user2.following} Following</li>
<li style={{fontSize:'15px',marginTop:'14px', fontWeight:'300',color:'#000', textAlign:'left'}}>{battle_result.user2.followers} Followers</li>
<li style={{fontSize:'15px',marginTop:'14px', fontWeight:'300',color:'#000', textAlign:'left'}}>{battle_result.user2.public_repos} repositories</li>        
</ul>
</div>
</div>
</div>
  </div>
  <button className="button" onClick={()=>onReset()}> RESET</button>
  </Fragment>
);
      }
      if(battle_result.user1!==null && battle_result.user2!=null){

        return(<Fragment>
  <div className="row">
<div className="column">
  Player One
  <div class="grid_box">
  <img src={battle_result.user1.avatar_url} className="avatar1" />
 <p style={{marginTop:'2em'}}>{battle_result.user1.login}</p>
 </div>
</div>
<div className="column">
  Player two
  <div class="grid_box">
  <img src={battle_result.user2.avatar_url} className="avatar1" />
  <p style={{marginTop:'2em'}}>{battle_result.user2.login}</p>
  </div>
</div>
  </div>
  <button className="button"   onClick={()=>battleStart()}> BATTLE</button>

  </Fragment>
        );
      }
      else{
      return (
        <div>
        <h1 className="header">Battle Page</h1>
       
      
         <form  onSubmit={e=>onSubmit(e)} >
         <div className="row" >
         <div className="column" >
         <label className="header" >
          Player one
        </label>
            <input type="text" placeholder="User 1" name="user1" value={user1} onChange={e=>onChange(e)} />
</div>
<div className="column" >
         <label className="header" >
          Player two
        </label> 
          <input type="text" placeholder="User 2" name="user2" value={user2} onChange={e=>onChange(e)} />
       </div>
       </div>
        
          <input type="submit" className="button" value="Search" />
        </form>
        </div>
   
      );
      }
};


const mapStateToProps = state => ({
  battle_result: state.battle,
});

export default connect(mapStateToProps,{getUserResult, resetUserResult,startBattle} )(Battle);
