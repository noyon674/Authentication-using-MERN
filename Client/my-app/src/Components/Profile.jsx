//import files
import axios from 'axios';
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/Profile.css'

//profile component
const Profile = () =>{
const navigate = useNavigate();

//when profile route will hit then first call useEffect method;
  useEffect(() => {

    //receive the token from localstorage
   const Token = localStorage.getItem('Token');
   //passing a header object with token as a Authorization key to the backend profile route
   //token is going to the middleware for verifying
   axios.get('http://localhost:3500/profile', {
    headers: {
      Authorization: Token
    }
   })
   .then((res)=>console.log(res)) //if token is corrent then stay profile route
   .catch((err)=>{
    console.log(err);

    //if token is not correct then redirect to the login page
    navigate('/login');
   })
  });
  
  return (
    <div className='background'>
      <h1 className='profileElement'>welcome to your profile</h1>
    </div>
  )
};

//export profile component
export default Profile;
