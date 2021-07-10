import React,{useState} from 'react';


const UserInfo=()=>
{

  const [userData,saveUserData]=useState({name:"",age:""})

  return(

  <div style={{display:'flex', flexDirection:"column", alignItems:"center",justifyContent:"center", marginTop:"10px"}}>
    <input style={{margin:"5px", padding:"10px"}} type="text" lable="name"  placeholder="please enter your name"
     onChange={e => saveUserData({...userData,name:e.target.value})} />

    <input style={{margin:"5px", padding:"10px"}} type="number" lable="age"  placeholder="please enter your age" 
    onChange={e => saveUserData({...userData,age:e.target.value})} />
    <h2>name :{userData.name}</h2>
    <h2>age:{userData.age}</h2>
 


  </div>

  

  )
  






}
export default UserInfo